// step 3
const express = require("express")
const router = express.Router();

const hotels =require("../data/hotels");
// const Hotel = require("../model/hotel.model");

//step10
const getAllHotelHandler = require("../controllers/hotelController")

// step 4
router.route("/").get(getAllHotelHandler)
  
  // (async(req,res)=>{

  // //step 5
  // //filter by category
  // const hotelCategory = req.query.category // when sending get request use this url : http://localhost:3500/api/hotels?category=National Parks
  // // basically req.query.category = ?category = category name (eg. national park here) 
  // // postman request : http://localhost:3500/api/hotels?category=National Parks 
  // // or http://localhost:3500/api/hotels?category=National+Parks , we can add + also on category names
  // // note category or query name should be case sensitive
  
  //   try {

  //     // step 5
  //     let hotels
  //     if(hotelCategory){
  //       hotels = await Hotel.find({category: hotelCategory})
  //     }else{
  //       hotels = await Hotel.find({});
  //     }
  //     // const hotels = await Hotel.find({}); // returns promise so use async and await
  //     hotels ? res.json(hotels) : res.status(404).json({message:"no data found"})
  //   }catch(err){

  //   }
   
  //   })
    module.exports = router ;
// router.route("/").get((req,res)=>{
// res.json(hotels.data); // getting local data from js file
// })

