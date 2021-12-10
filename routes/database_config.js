var mysql = require('mysql');
var fs = require('fs');
const path = require('path');

//const result = __dirname.replace(/\\/g,"/");

var pool = mysql.createPool({
    host: 'tonymysql1207.mysql.database.azure.com',
    user: 'Jintest',
    password: '!Ji20211021-10',
    database: 'quickstartdb',
    port: 3306,
	ssl: true,
   // ssl:{ca : fs.readFileSync(result+'/../cert/DigiCertGlobalRootCA.crt.pem')},
	connectionLimit: 100
});


var query=function(sql,param,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
			//console.log(pool);
			//console.log(pool.config.connectionLimit);
			//console.log(pool._allConnections.length);
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