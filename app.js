var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var AnInventoryRouter = require('./routes/getanInventory');
const mysql = require('mysql');
var app = express();

// var config =
// {
    // host: 'tonymysql1207.mysql.database.azure.com',
    // user: 'Jintest',
    // password: '!Ji20211021-10',
    // database: 'quickstartdb',
    // port: 3306,
    // ssl: true
// };

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
	   // exports.car = conn;
    // }
// });

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


console.log(__dirname);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inventory', AnInventoryRouter);

//Get all inventory
app.get('/inventory', (req,res)=>{
	const query=  require('./routes/database_config');
	query('select * from inventory','',(err,rows,fields)=>{
		if(!err){
			console.log(rows[0].name);
			//console.log('Row: ' + JSON.stringify(rows[0]));
			var test=JSON.parse(JSON.stringify(rows[0]));
			console.log("API Error: test2");
			console.log("Successfully update the database 12/12");
			res.send(rows);
			
		}else{
			console.log(err);	
			res.send(err);
		}
		
	})
})










// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;

  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(res.locals.error);
  const test=res.locals.error;
  console.log("lost Info: "+res.locals.error);
  console.log("question1: "+test);
  // render the error page
  res.status(err.status || 500);

  res.render('error',{res1:res.locals.error});
});


module.exports = app;
