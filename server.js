//to do
//* Headline - the title of the article
//* Summary - a short summary of the article
// * URL - the url to the original article


// Dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongojs	= require('mongojs');
var request = require('request'); 
var cheerio = require('cheerio'); 

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

// Connect to localhost
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/newsfinder", {
  useMongoClient: true
});

// Database config with mongoose
var db = mongoose.connection;
	// Show any mongoose errors
	db.on("error", function(error) {
	  console.log("Error: ", error);
	});
	// Once logged in to the db through mongoose, log a success message
	db.once("open", function() {
	  console.log(" connection successful.");
	});


//port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});