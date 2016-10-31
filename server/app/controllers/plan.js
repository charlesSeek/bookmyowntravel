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

exports.getAllPlansList = function(req,res){
    Plan.find({},function(err,plans){
        if (err){
            res.status(500).json({"success":false,"errMsg":err});
        }else{
            var plansList = [];
            plansList = plans.map((plan)=>{
                var _id = plan._id;
                var name = plan.name;
                var continent = plan.continent;
                var createdYear = plan.createdAt.getFullYear();
                var createdMonth = plan.createdAt.getMonth()+1;
                var createdDay = plan.createdAt.getDate();
                var createdAt = createdYear+"-"+createdMonth+"-"+createdDay;
                var updatedYear = plan.updatedAt.getFullYear();
                var updatedMonth = plan.updatedAt.getMonth()+1;
                var updatedDay = plan.updatedAt.getDate();
                var updatedAt = updatedYear+"-"+updatedMonth+"-"+updatedDay;
                return {
                    _id: _id,
                    name: name,
                    continent: continent,
                    createdAt: createdAt,
                    updatedAt: updatedAt
                }
            })
            res.json({"success":true,data:plansList});
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
