const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const connectDB = require('./connectDB.js');
const getDocuments = require('./getDocuments.js');
const dbName = 'admin';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

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
        let options = {
            handle: getDocuments,
            dbName,
            siteName: "col",
            findTips: {}
        };

        if(checkUser(await connectDB(options), postData)){
            ctx.body = {flag: true};
        }else{
            ctx.body = {flag: false, message: "账号密码错误！"};
        }
    };
})

//验证账号密码
function checkUser(userArr, postData){
    let res;
    for(let i in userArr){
        if(userArr[i].userName === postData.userName){
            res = userArr[i].password === postData.password ? true : false;
        }
    }
    return res;
}

app.listen(3000, () => {
    console.log('sever is starting at port 3000');
})