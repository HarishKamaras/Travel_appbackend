//step10
const Wishlist =require("../model/wishlist.model");

const createWishlistHandler = async (req,res)=>{ // it now takes 3 path, middleware and callback..read more ?

    const newWishlist =new Wishlist(req.body);
    try{
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    }catch(err){
        res.status(500).json({message: " failed to create wishlist"})
    }
}

const deleteWishlistHandler = async(req,res)=>{
    try{
        await Wishlist.findByIdAndDelete(req.params.id);// read about params
        res.json({message: "Hotel Deleted from Wishlist"})
    }catch(err){
        res.status(500).json({message: "could not delete from wishlist"})
    }
}

const getWishlistHandler = async (req, res)=>{
    try{
        const wishlist =await Wishlist.find({});
        wishlist ? res.json(wishlist): res.json({message: "no items found in the wishlist"})
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {createWishlistHandler, deleteWishlistHandler, getWishlistHandler};