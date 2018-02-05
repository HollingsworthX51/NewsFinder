//to do
//* Headline - the title of the article
//* Summary - a short summary of the article
// * URL - the url to the original article


// Dependencies
var cheerio = require('cheerio');
var request = require('request');
var express = require("express");
var handlebars = require('express-handlebars');
var mongoose = require('mongoose');
var mongojs = require("mongojs");
var bodyParser = require('body-parser');

//start express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
//static
app.use(express.static("public"));

// Express-Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import Routes/Controller
var router = require("./controllers/controllers.js");
app.use("/", router);

// Connect to localhost if not a production environment
if(process.env.NODE_ENV == 'production'){
	mongoose.connect();
}
else{
	mongoose.connect("mongodb://localhost/NewScraper");
}

// Database config with mongoose
var db = mongoose.connection;
	// Show any mongoose errors
	db.on("error", function(error) {
	  console.log("Error: ", error);
	});
	// Once logged in to the db through mongoose, log a success message
	db.once("open", function() {
	  console.log("M connection successful.");
	});


//port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});