//modules
var express = require('express');
var app 	= express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/emberData');

//set the server header
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});


var enqSchema = new mongoose.Schema({
	name: 'string',
	email: 'string',
	username: 'string',
	password: 'string'
});

var enqModel = mongoose.model('enquirer',enqSchema);

app.get('/api/enquirer', function(req,res) {
	enqModel.find({},function(err,docs) {
		if(err) {
			res.send(err);
		}
		else {
			res.send(docs);
		}
	});
});

app.listen('4500');