const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'admin';


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
        if(checkUser(await connectDb(getDocuments), postData)){
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

//连接数据库
function connectDb(handle){
    return new Promise(resolve => {
        MongoClient.connect(dbUrl, function(err, client){
            assert.equal(null, err);
            
            handle(client).then(res => {
                resolve(res);
                client.close();
            })
            
        })
    })
}

//查找文档
async function getDocuments(client){
    return await new Promise(resolve => {
        const db = client.db(dbName);
        const collection = db.collection('col');
        collection.find().toArray(function(err, docs){
            assert.equal(err, null);
            resolve(docs);
        });
    })
}

app.listen(3000, () => {
    console.log('sever is starting at port 3000');
})