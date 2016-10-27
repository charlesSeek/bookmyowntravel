var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var continentController = require('./app/controllers/continent');
var countryController = require('./app/controllers/country');
var planController = require('./app/controllers/plan');

var app = express();

//log all request in the apache combined format to stdout
app.use(morgan('combined'));

//mongodb config
var dbUrl = 'mongodb://127.0.0.1/bookmyowntravel';
mongoose.connect(dbUrl);

//use body-parser middleware to parse data
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({type:'*/*'}));

var port = process.env.PORT||12000;

//GET APIs welcome message
app.get('/',function(req,res){
    res.json({"message":"welcome to use book my own travel"});
})

/*
    Continents CURD 
*/
app.get('/continents',continentController.getAllContinents);
app.get('/continents/:id',continentController.getContinentById);


/*
    countries CURD
*/
app.get('/countries',countryController.getAllCountries);
//app.get('/countries/:name',countryController.getOneCountryByName);
app.get('/countries/:id',countryController.getOneCountryById);


/*
    plans CURD
*/
app.get('/plans',planController.getAllPlans);
app.get('/plans/:id',planController.getOnePlanById);




app.listen(port,function(){
    console.log('the server is running on '+port);
})
