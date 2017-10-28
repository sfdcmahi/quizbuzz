var express=require('express');
var app=express();
var morgan=require('morgan');
var bodyParser=require('body-parser');
var port = process.env.PORT || 8080; //set the port

//Configuration
app.use(express.static('./public'));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
require('./routes/routes.js')(app);

app.listen(port,function(req,res){
  console.log('quizbuzz up and running!!');
});
