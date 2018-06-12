/**
 * 删除用户
 */
const User = require("./user.js");

const deleteUser = function(_id){
    return new Promise(resolve => {
        User.remove({"_id": _id}, function(err, res){
            if(err){
                resolve(false);
            }else{
                resolve(res);
            }
        })
    });
}

module.exports = deleteUser;