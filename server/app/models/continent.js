var mongoose = require('mongoose');
var ContinentSchema = new mongoose.Schema({
    name:{
        unique:true,
        type:String,
        required:true
    },
    descriptions:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});
module.exports = mongoose.model('continent',ContinentSchema);