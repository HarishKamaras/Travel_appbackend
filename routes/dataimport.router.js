// step 4
const express = require ("express")
const mongoose =require ('mongoose');

const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels")

const router = express.Router();

router.route("/")
.post(async (req,res)=>{ // it returns a promise so use async and await
  try{
//    await Hotel.remove(); // can we use multiple await inside a async func ? need to check ?
    const hotelsInDB= await Hotel.insertMany(hotels.data);
    res.json(hotelsInDB)
  }catch(err){
 console.log(err);
 res.json({message: "could not add data to DB"})
  }
})

module.exports =router;