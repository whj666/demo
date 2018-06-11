/**
 * 读取用户信息
 */
const User = require("./user.js");

const findUser = function(option = {}){
    return new Promise(resolve => {
        User.findOne(option, function(err, res){
            if(err){
                console.log("Error:" + err);
            }else{
                resolve(res);
            };
        })
    })
}

module.exports = findUser;