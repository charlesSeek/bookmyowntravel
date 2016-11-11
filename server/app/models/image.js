var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
    name:{
        unique:true,
        type:String,
        required:true
    },
    description:String,
    image_category:String,
    country_option:String,
    hashtags: [String],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }    
});

module.exports = mongoose.model('image',ImageSchema);