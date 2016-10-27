var mongoose = require('mongoose');

var CountrySchema = new mongoose.Schema({
    name:{
        unique:true,
        type:String,
        required:true
    },
    abbr:{
        unique:true,
        type:String,
        required:true
    },
    captial:{
      type:String,
      required:true
    },
    offical_languages:Array,
    area:Number,
    population:Number,
    currency:String,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
    
});

module.exports = mongoose.model('country',CountrySchema);