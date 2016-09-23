var express = require('express');

var app = express();

app.get('/', function(req,res,next){
	res.send("<h1>Pie Module 1</h1>")
})

app.listen(3000, function(){
	console.log("Listening on port 3000");
})