/**
 * 用户信息
 */
const mongoose = require('../db.js');
const Schema = mongoose.Schema;

const UserSchema = new Schema({    
    name: String,
    type: String,
    email: String,
    userName: String
});

module.exports = mongoose.model('table', UserSchema);