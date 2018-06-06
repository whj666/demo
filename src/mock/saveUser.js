/**
 * 保存用户信息
 */
const User = require("./user.js");

const saveUser = function(option = {}){
    return new Promise(resolve => {
        const user = new User({
            userName: option.newUserName,
            password: option.newPassword,
        });
    
        user.save(function(err, res){
            if(err){
                console.log("Error:" + err);
            }else{
                resolve(true);
            };
        });
    });
}

module.exports = saveUser;