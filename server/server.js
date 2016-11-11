var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var continentController = require('./app/controllers/continent');
var countryController = require('./app/controllers/country');
var planController = require('./app/controllers/plan');
var imageController = require('./app/controllers/image');

var app = express();

//log all request in the apache combined format to stdout
app.use(morgan('combined'));

//enable cross domain
app.use('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
  next();
 });


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
app.get('/countries/:id',countryController.getOneCountryById);
app.post('/countries',countryController.createNewOneCountry);
app.put('/countries/:id',countryController.updateOneCountryById);
app.delete('/countries/:id',countryController.deleteOneCountryById);


/*
    plans CURD
*/
app.get('/plans',planController.getAllPlans);
app.get('/plans/:id',planController.getOnePlanById);
app.get('/plansList',planController.getAllPlansList);
app.post('/plans',planController.createNewOnePlan);
app.put('/plans/:id',planController.updateOnePlanById);
app.delete('/plans/:id',planController.deleteOnePlanById);

/*
    image CURD
*/
app.get('/images',imageController.getAllImages);
app.get('/images/:id',imageController.getOneImageById);


app.listen(port,function(){
    console.log('the server is running on '+port);
})
