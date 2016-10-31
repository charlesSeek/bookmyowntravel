'use strict';
var Country = require('../models/country');
var _ = require('underscore');

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

//function to create a new country
exports.createNewOneCountry = function(req,res){
    var countryObj = req.body;
    console.log(req.body);
    if (!countryObj){
        res.status(422).json({"success":false,"errMsg":"content can not be empty"});
    }else {
        var name = countryObj.name;
        Country.findOne({name:name},function(err,country){
            if (err){
                 res.status(500).json({"success":false,"errMsg":err})
            }else{
                if (!country){
                    var country = new Country(countryObj);
                    country.save(function(err){
                        if (err){
                             res.status(500).json({"success":false,"errMsg":err});
                        }else{
                            res.json({"success":true,"data":country});
                        }
                    },{versionKey: false})
                }else{
                    res.status(422).json({"success":false,"errMsg":"the country has existed in the database"});
                }
            }
        })
    }
}

//function to update an existed country
exports.updateOneCountryById = function(req,res){
    var id = req.params.id;
    console.log('id:',id);
    if(id){
        Country.findById(id,function(err,country){
            if (err){
                res.status(500).json({"success":false,"errMsg":err})
            }else{
                if (!country){
                    res.status(404).json({"success":false,"errMsg":"can not find the country by id"})
                }else{
                    var countryObj = req.body;
                    var _country = _.extend(country,countryObj);
                    _country.save(function(err,country){
                        if (err){
                            res.status(500).json({"success":false,"errMsg":err})
                        }else{
                            res.json({"success":true,data:country})
                        }
                            
                    },{versionKey: false})
                }
            }
        })
    }else{
        res.status(422).json({"success":false,"errMsg":"the id can not be empty"})
    }
}

//function to delete a country by id
exports.deleteOneCountryById = function(req,res){
    var id = req.params.id;
    if (id){
        Country.findById(id,function(err,country){
            if (err){
                res.status(500).json({"success":true,"errMsg":err})
            }else{
                Country.remove({_id:id},function(err,country){
                    if (err){
                        res.status(500).json({"success":true,"errMsg":err})
                    }else{
                        res.json({"success":true})
                    }
                })
            }
        })
    }else{
        res.status(404).json({"success":false,"errMsg":"the id can not be empty"})
    }
}
