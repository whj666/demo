/**
 * 保存个人信息
 */
const UserData = require("./userData.js");

const saveUserData = function(option){
    return new Promise(resolve => {
        UserData.findOne({userName: option.userName}, function(err, res){
            if(err){
                console.log("Error:" + err);
            }else{
                if(!res){
                    const userData = new UserData({...option});
                
                    userData.save(function(err2, res2){
                        if(err2){
                            console.log("Error:" + err2);
                        }else{
                            resolve(true);
                        };
                    });
                }else{
                    UserData.update({userName: option.userName}, {...option}, function(err2, res2){
                        if(err2){
                            console.log("Error:" + err2);
                        }else{
                            resolve(true);
                        };
                    })
                }
            };
        })
    });
}

module.exports = saveUserData;