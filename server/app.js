const express = require("express");
const app=express();
const bodyParser = require("body-parser")
var cors = require('cors');
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
  });
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Rouet imports
const count = require("./routes/Count");


app.use("/api/v1",count);


// razorpay


module.exports=app;