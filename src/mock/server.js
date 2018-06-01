const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    if(ctx.url === '/api/get' && ctx.method === 'GET'){
        let html = `
            <h1>koa2 request post demo</h1>
            <form method="POST" action="/">
            <p>userName</p>
            <input name="userName" /><br/>
            <p>nickName</p>
            <input name="nickName" /><br/>
            <p>email</p>
            <input name="email" /><br/>
            <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    }else if(ctx.url === '/api/post' && ctx.method === 'POST'){
        let postData = await parsePostData(ctx);
        ctx.body = postData;
    }else{
        // 其他请求显示404
        ctx.body = '<h1>404！！！ o(╯□╰)o</h1>';
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
    console.log('[demo] request post is starting at port 3000');
})