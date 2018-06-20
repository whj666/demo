/**
 * 保存用户头像
 */
const UserPhoto = require("./userPhoto.js");
const fs = require('fs');

const saveUserPhoto = function(photoName, userName){
    return new Promise(resolve => {
        let option = {userName};
        UserPhoto.findOne(option, function(err, res){
            if(err){
                console.log("Error:" + err);
            }else{
                if(!res){
                    const userPhoto = new UserPhoto({
                        photoName,
                        userName
                    });
                
                    userPhoto.save(function(err2, res2){
                        if(err2){
                            console.log("Error:" + err2);
                        }else{
                            resolve(true);
                        };
                    });
                }else{
                    UserPhoto.update({_id: res._id}, {photoName, userName}, function(err2, res2){
                        if(err2){
                            console.log("Error:" + err2);
                        }else{

                            //删除图片
                            fs.unlink('resources/images/' + res.photoName, function(err3){
                                if(err3){
                                    console.log("Error:" + err3);
                                }else{
                                    resolve(true);
                                };
                            });
                        };
                    })
                }
            };
        })
    });
}

module.exports = saveUserPhoto;