const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

//使用ctx.body解析中间件
app.use(bodyParser())

app.use(async(ctx) => {
    if(ctx.url.substring(0, ctx.url.indexOf("?")) === '/api/get' && ctx.method === 'GET'){
        let request = ctx.request;
        let query = request.query;
        ctx.body = {flag: true, data: [query]};
    }else if(ctx.url === '/api/post' && ctx.method === 'POST'){
        //当POST请求的时候，中间件koa-bodyparser解析POST传递的数据，并显示出来
        let postData = ctx.request.body;
        ctx.body = {flag: true, data: [postData]};
    };
})

app.listen(3000, () => {
    console.log('request post is starting at port 3000');
})