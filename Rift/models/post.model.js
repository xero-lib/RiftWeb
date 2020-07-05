const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports.postSchema = new Schema({
  owner: Number,
  postID: 0,
  nsfw: Boolean,
  title: String,
  content: String,
  visibility: Array,
  awards: Array,
  tags: Array,
  votes: Array,
  editedDate: String,
  creationDate: String
});

// mongoose.model("Post", postSchema);
