//查找文档 (数据库连接后，根据数据库名称，集合名称，条件来查询)
module.exports = function getDocuments(options){
    let {client, assert, dbName, siteName, findTips} = options;
    return new Promise(resolve => {
        const db = client.db(dbName);
        const collection = db.collection(siteName);
        collection.find(findTips).toArray(function(err, docs){
            assert.equal(err, null);
            resolve(docs);
        });
    })
}