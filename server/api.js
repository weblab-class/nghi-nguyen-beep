/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

const Closet = require("./models/closet");
const { updateMany } = require("./models/user");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    
    res.send({});
  }

  res.send(req.user);
});

router.get("/user", (req, res) => {
  // console.log(req.user);
  User.findById(req.user._id).then((user) => {
    res.send(user);
  }).catch(
    function (err) {
      console.log("error at api/user ", err)
    }
  );
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case

router.post("/closet", (req, res) => {
  console.log(req.body);

  User.findByIdAndUpdate(req.body.userId,
    {closet: {
      tops: req.body.closet.top,
      bottoms: req.body.closet.bottom,
      shoes: req.body.closet.shoes,
      outerwear: req.body.closet.outerwear,
      accessories: req.body.closet.accessory,
      }
    }
  ).then((user) => {res.send(user)});
});

router.post("/avatar", (req, res) => {
  User.findByIdAndUpdate(req.body.userId,
    {avatar: req.body.avatar.avatarSelected,}
  ).then((user) => {res.send(user)});
});

router.get("/outfit", (req, res) => {
  User.findById(req.user._id).then((user) => {
    new Promise((resolve, reject) => {
      Closet.findById("600c8794efe38f2877ec0acc").then((dbCloset) => resolve(CreateOutfit(user.closet, dbCloset)))})
      .then((result) => res.send(result))
      .catch( () => {(err) => console.log("dkjsfsm error in promise", err)});})
    .catch( function (err) {
      console.log("error at api/outfit ", err );
      }
    );  
});

function CreateOutfit(userCloset, dbCloset) {

  userCloset.tops.forEach( element => userCloset.tops.set(element, {
    "averageTemp": ((dbCloset.tops.get(element.clothing).highTemp) + (dbCloset.tops.get(element.clothing).lowTemp)) / 2,
    "frequency": element.frequency,
    })
  );

  userCloset.bottoms.forEach( element => userCloset.bottoms.set(element, {
    "averageTemp": ((dbCloset.bottoms.get(element.clothing).highTemp) + (dbCloset.bottoms.get(element.clothing).lowTemp)) / 2,
    "frequency": element.frequency,
    })
  );

  userCloset.shoes.forEach( element => userCloset.shoes.set(element, {
    "averageTemp": ((dbCloset.shoes.get(element.clothing).highTemp) + (dbCloset.shoes.get(element.clothing).lowTemp)) / 2,
    "frequency": element.frequency,
    })
  );

  userCloset.outerwear.forEach( element => userCloset.outerwear.set(element, {
    "averageTemp": ((dbCloset.outerwear.get(element.clothing).highTemp) + (dbCloset.outerwear.get(element.clothing).lowTemp)) / 2,
    "frequency": element.frequency,
    })
  );

  userCloset.accessories.forEach( element => userCloset.accessories.set(element, {
    "averageTemp": ((dbCloset.accessories.get(element.clothing).highTemp) + (dbCloset.accessories.get(element.clothing).lowTemp)) / 2,
    "frequency": element.frequency,
    })
  );

  return userCloset;

}

function CreateCloset() {
  let tops = new Map();
  let bottoms = new Map();
  let shoes = new Map();
  let outerwear = new Map();
  let accessories = new Map();

    tops.set('Shirt', {highTemp: 100, lowTemp: 55});
    tops.set('LongSleeve', {highTemp: 60, lowTemp: 0});
    tops.set('TankTop', {highTemp: 120, lowTemp: 65});

    bottoms.set('Jeans', {highTemp: 75, lowTemp: 0});
    bottoms.set('Shorts', {highTemp: 100, lowTemp: 60});
    bottoms.set('Sweatpants', {highTemp: 50, lowTemp: 0});

    shoes.set('RainBoots', {highTemp: 70, lowTemp: 40});
    shoes.set('Sneakers', {highTemp: 100, lowTemp: 0});

    outerwear.set('Cardigan', {highTemp: 70, lowTemp: 40});
    outerwear.set('Crewneck', {highTemp: 65, lowTemp: 0});
    outerwear.set('Parka', {highTemp: 40, lowTemp: 0});
    outerwear.set('RainJacket', {highTemp: 80, lowTemp: 40});
    outerwear.set('Sweater', {highTemp: 55, lowTemp: 20});

    accessories.set('Umbrella', {highTemp: 80, lowTemp: 40});
    accessories.set('Sunglasses', {highTemp: 120, lowTemp: 80});
    accessories.set('Mittens', {highTemp: 60, lowTemp: 20});
    accessories.set('Hat', {highTemp: 100, lowTemp: 60});

    const newCloset = new Closet({
      tops: tops,
      bottoms: bottoms,
      shoes: shoes,
      outerwear: outerwear,
      accessories: accessories,
    });

    return newCloset.save();
}


router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
