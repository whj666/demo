const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const findUser = require('./findUser.js');
const saveUser = require('./saveUser.js');

//使用ctx.body解析中间件 (当POST请求的时候，中间件koa-bodyparser解析POST传递的数据，并显示出来)
app.use(bodyParser())

app.use(async (ctx) => {
    if(ctx.url.substring(0, ctx.url.indexOf("?")) === '/api/get' && ctx.method === 'GET'){
        let request = ctx.request;
        let query = request.query;
        ctx.body = {flag: true, data: [query]};
    }else if(ctx.url === '/api/post' && ctx.method === 'POST'){
        let postData = ctx.request.body;
        ctx.body = {flag: true, data: [postData]};
    }else if(ctx.url === '/api/login' && ctx.method === 'POST'){
        let postData = ctx.request.body;
        let userArr = await findUser({userName: postData.userName});

        if(checkUser(userArr, postData)){
            ctx.body = {flag: true};
        }else{
            ctx.body = {flag: false, message: "账号密码错误！"};
        }
    }else if(ctx.url === '/api/register' && ctx.method === 'POST'){
        let postData = ctx.request.body;
        let userArr = await findUser({userName: postData.newUserName});

        if(!checkUserName(userArr, postData)){
            if(await saveUser(postData)){
                ctx.body = {flag: true, message: "注册成功！"};
            };
        }else{
            ctx.body = {flag: false, message: "账号已经存在！"};
        }
    }
})

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

app.listen(3000, () => {
    console.log('sever is starting at port 3000');
})