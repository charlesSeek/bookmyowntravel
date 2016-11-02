var Plan = require('../models/plan');
var _ = require('underscore');

//function to get all plans
exports.getAllPlans = function(req,res){
    Plan.find({},function(err,plans){
        if (err){
            res.status(500).json({"success":false,"errMsg":err});
        }else{
            res.json({"success":true,"data":plans});
        }
    })
}

//function to get all plan list, including basic info
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
                var status = plan.status;
                return {
                    _id: _id,
                    name: name,
                    continent: continent,
                    createdAt: createdAt,
                    updatedAt: updatedAt,
                    status:status
                }
            })
            res.json({"success":true,data:plansList});
        }
    })
}

//function to get one plan by plan id
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

//function to create a new plan
exports.createNewOnePlan = function(req,res){
    var planObj = req.body;
    console.log(req.body);
    if (!planObj){
        res.status(422).json({"success":false,"errMsg":"content can not be empty"});
    }else {
        var name = planObj.name;
        Plan.findOne({name:name},function(err,plan){
            if (err){
                 res.status(500).json({"success":false,"errMsg":err})
            }else{
                if (!plan){
                    var plan = new Plan(planObj);
                    plan.save(function(err){
                        if (err){
                             res.status(500).json({"success":false,"errMsg":err});
                        }else{
                            res.json({"success":true,"data":plan});
                        }
                    },{versionKey: false})
                }else{
                    res.status(422).json({"success":false,"errMsg":"the country plan has existed in the database"});
                }
            }
        })
    }
}

//function to update a plan by id
exports.updateOnePlanById = function(req,res){
    var id = req.params.id;
    console.log('id:',id);
    if(id){
        Plan.findById(id,function(err,plan){
            if (err){
                res.status(500).json({"success":false,"errMsg":err})
            }else{
                if (!plan){
                    res.status(404).json({"success":false,"errMsg":"can not find the plan by id"})
                }else{
                    var planObj = req.body;
                    var _plan = _.extend(plan,planObj);
                    _plan.save(function(err,plan){
                        if (err){
                            res.status(500).json({"success":false,"errMsg":err})
                        }else{
                            res.json({"success":true,data:plan})
                        }
                            
                    },{versionKey: false})
                }
            }
        })
    }else{
        res.status(422).json({"success":false,"errMsg":"the id can not be empty"})
    }
}

//function to delete a plan by id
exports.deleteOnePlanById = function(req,res){
    var id = req.params.id;
    if (id){
        Plan.findById(id,function(err,plan){
            if (err){
                res.status(500).json({"success":true,"errMsg":err})
            }else{
                if (plan){
                    Plan.remove({_id:id},function(err,plan){
                        if (err){
                            res.status(500).json({"success":true,"errMsg":err})
                        }else{
                            res.json({"success":true})
                        }
                    })
                }else{
                    res.json({"success":false,"errMsg":"can not find the plan by id"});
                }
                
            }
        })
    }else{
        res.status(404).json({"success":false,"errMsg":"the id can not be empty"})
    }
}
