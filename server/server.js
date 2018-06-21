const serve = require('koa-static');
const Koa = require('koa');
const koaBody = require('koa-body');
const fs = require('fs');

//login
const findUser = require('./app/login/findUser.js');
const saveUser = require('./app/login/saveUser.js');
const {checkUser, checkUserName} = require('./app/login/action.js');

//table
const tableSaveUser = require('./app/table/saveUser.js');
const tableFindUser = require('./app/table/findUser.js');
const deleteUser = require('./app/table/deleteUser.js');

//userPhoto
const saveUserPhoto = require('./app/userInfo/photo/saveUserPhoto.js');
const findUserPhoto = require('./app/userInfo/photo/findUserPhoto.js');

//userData
const saveUserData = require('./app/userInfo/userData/saveUserData.js');
const getUserData = require('./app/userInfo/userData/getUserData.js');

const app = new Koa();
app.use(serve('.'));
app.use(koaBody({
    multipart: true,
    formidable: {
        keepExtensions: true,                                                                          
        uploadDir: "resources/images",                                                                
        onFileBegin: (fileName, file) => {                                                         
            const type = file.path.substring(file.path.indexOf("."), file.path.length);
            file.path = "resources/images/" + fileName + "_" + (new Date()).valueOf() + type;
        }
    }
}));

//事件集
app.use(async (ctx) => {
    if(ctx.url.substring(0, ctx.url.indexOf("?")) === '/api/get' && ctx.method === 'GET'){
        let request = ctx.request;
        let query = request.query;
        ctx.body = {flag: true, data: [query]};
    }else if(ctx.url === '/api/post' && ctx.method === 'POST'){
        let postData = ctx.request.body;
        ctx.body = {flag: true, data: [postData]};
    }else if(ctx.url === '/api/login' && ctx.method === 'POST'){
        //登陆
        let postData = ctx.request.body;
        let userArr = await findUser({userName: postData.userName});

        if(checkUser(userArr, postData)){
            ctx.body = {flag: true};
        }else{
            ctx.body = {flag: false, message: "账号密码错误！"};
        }
    }else if(ctx.url === '/api/register' && ctx.method === 'POST'){
        //注册
        let postData = ctx.request.body;
        let userArr = await findUser({userName: postData.newUserName});

        if(!checkUserName(userArr, postData)){
            if(await saveUser(postData)){
                ctx.body = {flag: true, message: "注册成功！"};
            };
        }else{
            ctx.body = {flag: false, message: "账号已经存在！"};
        }
    }else if(ctx.url.substring(0, ctx.url.indexOf("?")) === '/api/getTableData' && ctx.method === 'GET'){
        //查询
        let request = ctx.request;
        let query = request.query;
        let userArr = await tableFindUser(query);
        if(userArr){
            ctx.body = {flag: true, data: userArr};
        }else{
            ctx.body = {flag: false, message: "查询失败！"};
        };
    }else if(ctx.url === '/api/saveTableEdit' && ctx.method === 'POST'){
        //新建&编辑保存
        let postData = ctx.request.body;
        let res = await tableSaveUser(postData);
        if(res){
            ctx.body = {flag: true, message: "保存成功！"};
        }else{
            ctx.body = {flag: false, message: "保存失败！"};
        }
    }else if(ctx.url === '/api/deleteTableData' && ctx.method === 'POST'){
        //删除
        let postData = ctx.request.body;
        let res = await deleteUser(postData);
        if(res.ok){
            ctx.body = {flag: true, message: "删除成功！"};
        }else{
            ctx.body = {flag: false, message: "删除失败！"};
        };
    }else if(ctx.url === '/api/uploadUserPhoto' && ctx.method === 'POST'){
        //用户头像上传
        let userName = null;
        for(let key in ctx.request.files){
            userName = key;
        };

        const path = ctx.request.files[userName].path;
        const photoName = path.substring(path.lastIndexOf("/") + 1, path.length);

        const res = await saveUserPhoto(photoName, userName);
        if(res){
            ctx.body = {flag: true, data: photoName};
        };
    }else if(ctx.url === '/api/getUserPhoto' && ctx.method === 'POST'){
        //获取用户头像
        let postData = ctx.request.body;
        let res = await findUserPhoto(postData);
        ctx.body = {flag: true, data: res && res.photoName};
    }else if(ctx.url === '/api/setUserInfo' && ctx.method === 'POST'){
        //保存用户个人信息
        let postData = ctx.request.body;
        const res = await saveUserData(postData);
        if(res){
            ctx.body = {flag: true, message: "保存成功！"};
        };
    }else if(ctx.url === '/api/getUserInfo' && ctx.method === 'POST'){
        //获取用户个人信息
        let postData = ctx.request.body;
        const res = await getUserData(postData);
        ctx.body = {flag: true, data: res};
    }
})

app.listen(8080, () => {
    console.log('sever is starting at port 8080');
})