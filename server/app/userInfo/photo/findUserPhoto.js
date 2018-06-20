/**
 * 查找用户头像
 */
const UserPhoto = require("./userPhoto.js");

const findUserPhoto = function(option){
    return new Promise(resolve => {
        UserPhoto.findOne(option, function(err, res){
            if(err){
                console.log("Error:" + err);
            }else{
                resolve(res);
            }
        });
    });
}

module.exports = findUserPhoto;