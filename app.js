var express = require('express');

var app = express();

app.get('/', function(req,res,next){
	res.send("<h1> ----------------------------- Pie Module 1 ------------------------</h1>")
})

app.listen(4000, function(){
	console.log("Pie is up on 4000");
})