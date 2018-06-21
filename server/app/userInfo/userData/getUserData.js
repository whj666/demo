/**
 * 保存个人信息
 */
const UserData = require("./userData.js");

const getUserData = function(option){
    return new Promise(resolve => {
        UserData.findOne(option, function(err, res){
            if(err){
                console.log("Error:" + err);
            }else{
                resolve(res);
            };
        })
    });
}

module.exports = getUserData;