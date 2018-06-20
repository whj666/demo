/**
 * 用户头像
 */
const mongoose = require('../../db.js');
const Schema = mongoose.Schema;

const UserPhoto = new Schema({    
    photoName: String,
    userName: String
});

module.exports = mongoose.model('userPhoto', UserPhoto);