var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'tonymysql1207.mysql.database.azure.com',
    user: 'Jintest',
    password: '!Ji20211021-10',
    database: 'quickstartdb',
    port: 3306,
    ssl: true,
	connectionLimit: 100
});

// const conn = new mysql.createConnection(config);
// conn.connect(
    // function (err) { 
    // if (err) { 
        // console.log("!!! Cannot connect !!! Error:");
        // throw err;
    // }
    // else
    // {
       // console.log("Connection established.");
	   // module.exports = conn;
    // }
// });


// var query=function(sql,post,callback){
	// const conn = new mysql.createConnection(config);
    // conn.connect(function(err){
        // if(err){
            // callback(err,null,null);
        // }else{
			// console.log('database connected!');
            // conn.query(sql,post,function(qerr,vals,fields){
                // //释放连接
                // conn.release();
                // //事件驱动回调
                // callback(qerr,vals,fields);
            // });
        // }
    // });
// };

var query=function(sql,param,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
			console.log(pool);
			console.log(pool.config.connectionLimit);
			console.log(pool._allConnections.length);
            conn.query(sql,param,function(qerr,vals,fields){
                //释放连接
                 conn.release();
                //事件驱动回调
                callback(qerr,vals,fields);
            });
        }
    });
};

module.exports = query;