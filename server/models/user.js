const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  avatar: String,
  closet: {
    tops: Array,
    bottoms: Array,
    shoes: Array,
    outerwear: Array,
    accessories: Array,
  },
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
 