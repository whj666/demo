/**
 * 用户头像
 */
const mongoose = require("../../db.js");
const Schema = mongoose.Schema;

const UserData = new Schema({
  userName: String,
  name: String,
  sex: String,
  birthday: String,
  showAge: Boolean,
  marriage: String,
  job: String,
  occupation: String,
  workAge: Number,
  Hometown: Array,
  email: String,
  personalitySignature: String,
});

module.exports = mongoose.model("userData", UserData);
