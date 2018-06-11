/**
 * 新建用户
 */
const User = require("./user.js");

const newUser = function(){
    let tableData = [];
    for(let i=1; i<=500; i++){
        tableData.push({
            key:i,
            name: "渣渣辉",
            age: i,
            type: "高富帅",
            email: "1010349053@qq.com",
            id: i
        })
    };

    let user = new User({
        userName: "admin",
        userList: tableData
    });

    user.save((err, res) => {
        if(err){
            console.log("err");
        }else{
            console.log("suc");
        }
    });
}

module.exports = newUser;