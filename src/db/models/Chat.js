const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    message: {
      type: String
    },
    senderName: {
      type: String
    },
    senderTag: {
      type: Number
    },
    senderId: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

let Chat = mongoose.model("messages", chatSchema);

module.exports = Chat;
