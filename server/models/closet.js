const { map } = require("core-js/fn/array");
const mongoose = require("mongoose");

const ClosetSchema = new mongoose.Schema({
  tops: map,
  outerwear: map,
  bottoms: map,
  shoes: map,
  accessories: map,
  
});

// compile model from schema
module.exports = mongoose.model("closet", ClosetSchema);
