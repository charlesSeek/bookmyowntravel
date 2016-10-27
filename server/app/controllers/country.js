'use strict';
var Country = require('../models/country');

//function to get all countries info
exports.getAllCountries = function(req,res){
   Country.find({},function(err,countries){
       if (err){
           res.status(500).json({"success":false,"errMsg":err})
       }else{
           res.json({"success":true,"data":countries})
       }
   })
}

//function to get a country by id
exports.getOneCountryById = function(req,res){
    var id = req.params.id;
    Country.findById(id,function(err,country){
        if (err){
            res.status(500).json({"success":false,"errMsg":err})
        } else {
            if (country==null)
                res.json({"success":false,"errMsg":"can not find the country by id"});
            else
                res.json({"success":true,"data":country});
        }
    })
}

//function to get a country by abbr name
exports.getOneCountryByName = function(req,res){
    var name = req.params.name;
    Country.where('abbr').equals(name)
    .exec(function(err,country){
        if (err){
            res.status(500).json({"success":false,"errMsg":err})
        } else {
            res.json({"success":true,"data":country});
        }
    })
}

