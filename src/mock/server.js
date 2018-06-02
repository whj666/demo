const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    if(ctx.url.substring(0, ctx.url.indexOf("?")) === '/api/get' && ctx.method === 'GET'){
        let request = ctx.request;
        let req_query = request.query;
        ctx.body = {flag: true, data: [req_query]}
    }else if(ctx.url === '/api/post' && ctx.method === 'POST'){
        let postData = await parsePostData(ctx);
        ctx.body = postData;
    };
})

//解析上下文里node原生请求的POST参数
parsePostData = (ctx) => {
    return new Promise((resolve, reject) => {
        try{
            let postdata = "";
            ctx.req.addListener('data', (data) => {
                postdata += data;
            });
            ctx.req.addListener("end", () => {
                let parseData = parseQueryStr(postdata);
                resolve(parseData);
            });
        }catch(err){
            reject(err);
        };
    });
}

//将POST请求参数字符串解析成JSON
parseQueryStr = (queryStr) => {
    let queryData = {};
    let dataArr = [];
    let queryStrList = queryStr.split('&');
    for(let [index, queryStr] of queryStrList.entries()){
        let itemList = queryStr.split('=');
        dataArr.push(JSON.parse(itemList[0]));
    };
    queryData.data = dataArr;
    queryData.flag = true;
    return queryData;
}

app.listen(3000, () => {
    console.log('request post is starting at port 3000');
})