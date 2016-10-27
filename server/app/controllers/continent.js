var Continent = require('../models/continent');
exports.getAllContinents = function(req,res){
    Continent.find({},function(err,continents){
        if (err){
            res.status(500).json({"success":false,"errMsg":err});
        }else {
            res.json({"success":true,"data":continents});
        }
    })
}
exports.getContinentById = function(req,res){
    var id = req.params.id;
    Continent.findById(id,function(err,continent){
        if (err){
            res.status(500).json({"success":false,"errMsg":err})
        }else {
            if (continent == null)
                res.json({"success":false,"errMsg":"can not find the continent by id"});
            else 
                res.json({"success":true,"data":continent});
        }
    })
}