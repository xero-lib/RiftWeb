const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports.messageSchema = new Schema({
  author: Number,
  content: String,
  visibility: Array,
  reaction: Array,
  editedDate: String,
  creationDate: String
});

// mongoose.model("Message", messageSchema);
