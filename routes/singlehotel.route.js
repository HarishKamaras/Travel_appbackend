const express = require("express");
const router = express.Router();

//step10
const singlehotleHandler = require("../controllers/singleHotelController");

// const Hotel = require("../model/hotel.model");

//postman request = http://localhost:3500/api/hotels/65ea01ef1f686f1e79bcd37e
router.route("/:id") 
.get(singlehotleHandler)
    
    
    
//     (async (req,res)=>{
//     try {
//         const {id}=req.params; // params has this object id, we destructering here, need to read about params
//         const hotel = await Hotel.findById(id);
//         res.json(hotel)
//     }catch(err){
//         res.status(404).json({message:"no hotel found"});
//     }
// })

module.exports =router;

