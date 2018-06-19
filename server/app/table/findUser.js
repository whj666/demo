/**
 * 查询用户信息
 */
const User = require("./user.js");

const findUser = function(option = {}){
    return new Promise(resolve => {
        let {minAge, maxAge} = option;
        option.age = {};

        delete option.minAge;
        delete option.maxAge;

        if(!option.name){
            delete option.name;
        }else{
            option.name = {$regex: option.name};  //模糊查询
        };

        if(minAge){
            option.age["$gte"] = minAge;
        };

        if(maxAge){
            option.age["$lte"] = maxAge;
        };

        if(JSON.stringify(option.age) === "{}"){
            delete option.age;
        };

        User.find(option, function(err, res){
            if(err){
                resolve(false);
            }else{
                resolve(res);
            };
        })
    })
}

module.exports = findUser;