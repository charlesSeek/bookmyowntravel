var Plan = require('../models/plan');

exports.getAllPlans = function(req,res){
    Plan.find({},function(err,plans){
        if (err){
            res.status(500).json({"success":false,"errMsg":err});
        }else{
            res.json({"success":true,"data":plans});
        }
    })
}

exports.getOnePlanById = function(req,res){
    var id = req.params.id;
    Plan.findById(id,function(err,plan){
        if (err){
            res.status(500).json({"success":false,"errMsg":err});
        }else{
            if (plan == null)
                res.json({"success":false,"errMsg":"can not find the plan by id"});
            else
                res.json({"success":true,"data":plan});
        }
    })
}