const mongoose = require("mongoose");

const ClosetSchema = new mongoose.Schema({
  tops: Array,
  bottom: Array,
  shoes: Array,
  outerwear: Array,
  accessory: Array,
  
});

// compile model from schema
module.exports = mongoose.model("closet", ClosetSchema);
