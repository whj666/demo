/**
 * 用户头像
 */
const mongoose = require('../../db.js');
const Schema = mongoose.Schema;

const UserImg = new Schema({    
    path: String
});

module.exports = mongoose.model('userImg', UserImg);