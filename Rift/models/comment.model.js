const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports.commentSchema = new Schema({
  author: Number,
  parentPost: Number,
  content: String,
  reaction: Array,
  tags: Array,
  nsfw: Boolean,
  votes: Array,
  editedDate: String,
  creationDate: String
});

// mongoose.model("Comment", commentSchema);
