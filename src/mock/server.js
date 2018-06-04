const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

//使用ctx.body解析中间件 (当POST请求的时候，中间件koa-bodyparser解析POST传递的数据，并显示出来)
app.use(bodyParser())

app.use(async(ctx) => {
    if(ctx.url.substring(0, ctx.url.indexOf("?")) === '/api/get' && ctx.method === 'GET'){
        let request = ctx.request;
        let query = request.query;
        ctx.body = {flag: true, data: [query]};
    }else if(ctx.url === '/api/post' && ctx.method === 'POST'){
        let postData = ctx.request.body;
        ctx.body = {flag: true, data: [postData]};
    }else if(ctx.url === '/api/login' && ctx.method === 'POST'){
        let postData = ctx.request.body;
        if(postData.userName === "admin" && postData.password === "1"){
            ctx.body = {flag: true, sgkey: "1234567890"};
        }else{
            ctx.body = {flag: false, message: "账号密码错误！"};
        }
    };
})

app.listen(3000, () => {
    console.log('request post is starting at port 3000');
    
})