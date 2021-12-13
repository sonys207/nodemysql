var express = require('express');
var router = express.Router();

/* GET inventory by id */

router.get('/:id',  (req,res)=>{
	var query= require('./database_config');
	  console.log(123456);
	 const post={name:"tonysai"}; 
	   query('update inventory set ? where id = 3',post,(err,result,fields)=>{
			if(!err){
				//console.log(rows[0].name);
				//console.log('Row: ' + JSON.stringify(rows[0]));
				//var test=JSON.parse(JSON.stringify(rows[0]));
				//console.log(test.name);
				//res.send(rows[0]);
				console.log("API Error: test1");
				console.log("Successfully update the database 12/12");
				res.send("Successfully update the database");
			}else{
				console.log(err);	
				res.send(err);
			}
	   });

})

module.exports = router;
