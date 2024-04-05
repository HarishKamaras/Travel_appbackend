//step10

const Category = require("../model/category.model");

const categoryHandler = async (req,res)=>{
    try{
 const categories = await Category.find({})
 res.json(categories);
    }catch(err){
 res.status(404).json({message: "could not find category"})
    }
}

module.exports = categoryHandler;


//Postman : get
//http://localhost:3500/api/hotels?category=National+Parks