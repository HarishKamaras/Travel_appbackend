//step10
const Hotel = require("../model/hotel.model");
const getAllHotelHandler = async(req,res)=>{

    //step 5
    //filter by category
    const hotelCategory = req.query.category // when sending get request use this url : http://localhost:3500/api/hotels?category=National Parks
    // basically req.query.category = ?category = category name (eg. national park here) 
    // postman request : http://localhost:3500/api/hotels?category=National Parks 
    // or http://localhost:3500/api/hotels?category=National+Parks , we can add + also on category names
    // note category or query name should be case sensitive
    
      try {
  
        // step 5
        let hotels
        if(hotelCategory){
          hotels = await Hotel.find({category: hotelCategory})
        }else{
          hotels = await Hotel.find({});
        }
        // const hotels = await Hotel.find({}); // returns promise so use async and await
        hotels ? res.json(hotels) : res.status(404).json({message:"no data found"})
      }catch(err){
    console.log(err);
      }
     
      }
      module.exports = getAllHotelHandler;