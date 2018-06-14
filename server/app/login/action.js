//验证账号密码
function checkUser(userArr, postData){
    let res = false;
    for(let i in userArr){
        if(userArr[i].userName === postData.userName){
            res = userArr[i].password === postData.password && true
        }
    }
    return res;
}

//注册时，验证账号是否重复
function checkUserName(userArr, postData){
    let res = false;
    res = userArr.some(item => {
        return item.userName === postData.newUserName;
    })
    return res;
}

module.exports = {
    checkUser,
    checkUserName
}