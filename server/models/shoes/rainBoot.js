const { map } = require("core-js/fn/array");
const mongoose = require("mongoose");

const rainBootSchema = new mongoose.Schema({
  lowerBound: Number,
  upperBound: Number,
  quantity: Number,
  colors: Array,
  
});

// compile model from schema
module.exports = mongoose.model("rainBoot", rainBootSchema);
