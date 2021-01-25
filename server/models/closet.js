const mongoose = require("mongoose");

const ClosetSchema = new mongoose.Schema({
  tops: Map,
  bottoms: Map,
  shoes: Map,
  outerwear: Map,
  accessories: Map,
  
});

// compile model from schema
module.exports = mongoose.model("closet", ClosetSchema);
