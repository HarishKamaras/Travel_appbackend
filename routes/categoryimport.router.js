// step 4
const express = require ("express")
const mongoose =require ('mongoose');

// const Category = require("../model/category.model");
const categories = require("../data/categories")

const router = express.Router();

router.route("/")
.post(async (req,res)=>{ // it returns a promise so use async and await
  try{
//    await Hotel.remove(); // can we use multiple await inside a async func ? need to check ?
    const categoriesInDB= await Category.insertMany(categories.data);
    res.json(categoriesInDB)
  }catch(err){
 console.log(err);
 res.json({message: "could not add data to DB"})
  }
})

module.exports =router;