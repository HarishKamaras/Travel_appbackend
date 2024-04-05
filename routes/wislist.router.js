const express = require('express');
const Wishlist =require("../model/wishlist.model");

//step 9
const verifyUser= require("../middleware/veridyuser")

//step10
const  wishlistController = require('../controllers/wishlistController')
const {createWishlistHandler, deleteWishlistHandler, getWishlistHandler} = wishlistController;

const router = express.Router();

router.route("/")
// .post( async (req,res)=>{ // before verifyUser
    .post(verifyUser, createWishlistHandler)
        
        
//         (async (req,res)=>{ // it now takes 3 path, middleware and callback..read more ?

//     const newWishlist =new Wishlist(req.body);
//     try{
//         const savedWishlist = await newWishlist.save();
//         res.status(201).json(savedWishlist);
//     }catch(err){
//         res.status(500).json({message: " failed to create wishlist"})
//     }
// })//postman: http://localhost:3500/api/wishlist
// post {
//     "hotelId": "65ea01ef1f686f1e79bcd37c"
// }
router.route("/:id").delete( verifyUser, deleteWishlistHandler )
    
    
//     (async(req,res)=>{
//     try{
//         await Wishlist.findByIdAndDelete(req.params.id);// read about params
//         res.json({message: "Hotel Deleted from Wishlist"})
//     }catch(err){
//         res.status(500).json({message: "could not delete from wishlist"})
//     }
// })// postman : http://localhost:3500/api/wishlist/6601c2ad5aea6206aab64e5a
// delete
// use id not hotelid
router.route("/")
.get(verifyUser, getWishlistHandler)
    
    
//     (async (req, res)=>{
//     try{
//         const wishlist =await Wishlist.find({});
//         wishlist ? res.json(wishlist): res.json({message: "no items found in the wishlist"})
//     }catch(err){
//         console.log(err)
//         res.status(500).json(err)
//     }
// })


module.exports = router;