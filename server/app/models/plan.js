var mongoose = require('mongoose');
var PlanSchema = new mongoose.Schema({
    name:{
        unique:true,
        type:String
    },
    continent:String,
    about:Object,
    when_to_go:Object,
    what_to_see_and_do:Object,
    sightseeing_touring_options:Object,
    budget_and_costs:Object,
    how_to_get_there:Object,
    how_to_get_around:Object,
    where_to_stay:Object,
    important_information:Object,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    },
    status:String
    
});
module.exports = mongoose.model('plan',PlanSchema);