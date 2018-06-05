const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbUrl = 'mongodb://localhost:27017';

//连接数据库
module.exports = function connectDB(options){
    return new Promise(resolve => {
        MongoClient.connect(dbUrl, function(err, client){
            assert.equal(null, err);

            options.client = client;
            options.assert = assert;

            options.handle(options).then(res => {
                resolve(res);
                client.close();
            })
            
        })
    })
}