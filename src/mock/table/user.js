/**
 * 用户信息
 */
const mongoose = require('../db.js');
const Schema = mongoose.Schema;

const UserSchema = new Schema({          
    userName: String,
    userList: []
});

module.exports = mongoose.model('table', UserSchema);