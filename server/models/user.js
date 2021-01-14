const mongoose = require("mongoose");
import ClosetSchema from "./closet.js";

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  avatar: String,
  closet: ClosetSchema,
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
