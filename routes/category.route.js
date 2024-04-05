const express =require('express');
const Category = require('../model/category.model');
// const categories = require('../data/categories');
const router =express.Router();

//step10
const categoryHandler = require('../controllers/categoryController')

router.route("/") 
//postman request = http://localhost:3500/api/category
.get(categoryHandler)


// (async (req,res)=>{
//     try{
//  const categories = await Category.find({})
//  res.json(categories);
//     }catch(err){
//  res.status(404).json({message: "could not find category"})
//     }
// })

module.exports = router;