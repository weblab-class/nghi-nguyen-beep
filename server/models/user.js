const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  avatar: String,
  closet: Map,
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
 