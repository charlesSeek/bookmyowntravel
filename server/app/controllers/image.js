var Image = require('../models/image');
var _ = require('underscore');

exports.getAllImages = function(req,res){
    Image.find({},function(err,images){
        if (err){
            res.status(500).json({"success":false,"errMsg":err})
        }else{
            res.json({"success":true,"data":images})
        }
    })
}

exports.getOneImageById = function(req,res){
    var id = req.params.id;
    Image.findById(id,function(err,image){
        if (err){
            res.status(500).json({"success":false,"errMsg":err});
        }else{
            if (image==null){
                res.json({"success":false,"errMsg":"can not find the image by the id"})
            }else{
                res.json({"success":true,"data":image})
            }
        }
    })
}

