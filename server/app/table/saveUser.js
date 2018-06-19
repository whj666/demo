/**
 * 保存用户
 */
const User = require("./user.js");

const saveUser = function(option){
    return new Promise(resolve => {
        let {name, age, type, email, userName, _id} = option;

        if(!_id){
            let user = new User({
                name,
                age,
                type,
                email,
                userName
            });
    
            user.save((err, res) => {
                if(err){
                    resolve(false);
                }else{
                    resolve(true);
                }
            });
        }else{
            User.update({"_id": _id}, option, function(err, res){
                if(err){
                    resolve(false);
                }else{
                    if(res.ok){
                        resolve(true);
                    }else{
                        resolve(false);
                    };
                };
            })
        };
    });
}

module.exports = saveUser;