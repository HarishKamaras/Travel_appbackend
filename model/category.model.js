// step 4
const mongoose = require('mongoose');

//creating mongoose.Schema
const categorySchema = new mongoose.Schema({
            //id: {type: String, required : true}, // Optional : id is not required because mongoose will by default create a id
            //name:String, simply mention srting if required use {type:String , required : true}
            category: {type: String, required : true},
            
})

const Category = mongoose.model("Category", categorySchema); // to use schema we need to create a model , model("Hotel", hotelSchema) use "Hotel" name singular

module.exports = Category;