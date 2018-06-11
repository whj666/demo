/**
 * 保存用户
 */
const User = require("./user.js");

const saveUser = function(option){
    return new Promise(resolve => {
        User.findOne({"userName":option.userName}, function(err, res){
            if(err){
                console.log("err");
            }else{
                let userName = option.userName;
                for(let i in res.userList){
                    if(res.userList[i].id === option.id){
                        delete option.userName;
                        res.userList[i] = Object.assign({}, res.userList[i], option);
                    };
                };

                User.update({"userName":userName}, res, function(err, res){
                    if(err){
                        console.log("err");
                    }else{
                        resolve(res);
                    }
                })
            }
        })

        // User.update({"userList.id": option.id}, {"$set": option}, function(err, res){
        //     if(err){
        //         console.log("err");
        //     }else{
        //         resolve(res);
        //     }
        // });
    });

    // let tableData = []; 
    // for(let i=1; i<=500; i++){
    //     tableData.push({
    //         key:i,
    //         name: "渣渣辉",
    //         age: i,
    //         type: "高富帅",
    //         email: "1010349053@qq.com",
    //         id: i
    //     })
    // };

    // let user = new User({
    //     userName: "admin",
    //     userList: tableData
    // });

    // user.save((err, res) => {
    //     if(err){
    //         console.log("err");
    //     }else{
    //         console.log("suc");
    //     }
    // });
}

module.exports = saveUser;