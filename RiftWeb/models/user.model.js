const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports.userSchema = new Schema({
  uid: Number,
  displayName: String,
  email: String,
  userIcon: String,
  token: String, //change user token on password change/other profile updates
  changes: Object,
  password: String,
  roles: Array,
  locale: String,
  creationDate: String
});

// mongoose.model("User", userSchema);