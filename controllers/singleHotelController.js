//step10
const Hotel = require("../model/hotel.model");

const singlehotleHandler = async (req,res)=>{
    try {
        const {id}=req.params; // params has this object id, we destructering here, need to read about params
        const hotel = await Hotel.findById(id);
        res.json(hotel)
    }catch(err){
        res.status(404).json({message:"no hotel found"});
    }
}

module.exports =singlehotleHandler;