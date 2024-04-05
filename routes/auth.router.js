//step 7
const express = require('express');
const User = require("../model/user.model");
const router =express.Router();
const CryptoJS = require('crypto-js')
const jwt =require("jsonwebtoken");

//step 10
const signupHandler = require('../controllers/signupController');
const loginHandler = require('../controllers/loginController')
// example of req.body.username
// req{
    // body{
//     "username": "harish",
//     "number": 998855662211,
//     "email": "harish@gmail.com",
//     "password": "1234567654321",

// } 
// }

router.route("/register")
 .post(signupHandler)
    
//     (async (req, res)=>{
//     try{
//         const newUser = new User ({
//             username: req.body.username, // req have inbuilt objects like id, body ...etc , check above example
//             number: req.body.number,
//             email: req.body.email,
//             password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()// read about this
//         });
//         const savedUser = await newUser.save();
//         res.status(201).json(savedUser);// .status here is optional for posting
//     }catch(err){
//         console.log(err)
//         res.status(500).json({message: "Error creating a user"})
//     }
//  })

 //login logic
 router.route("/login")
.post(loginHandler)

// (async(req,res)=>{
//     try{
//         const user = await User.findOne({number:req.body.number});
//         !user && res.status(401).json({message:"Incorrect mobile number"}); // it returns entire object and store in user

//         const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY)
//         .toString(CryptoJS.enc.Utf8);

//         decodedPassword !== req.body.password && res.status(401).json({message: " Incorrect password"});

//         const {password, ...rest}=user._doc; // to retrun object without password by destructing
//         // or
//         // const {password, ...rest}=user; works without ._doc also
// // _ doc all the details are present
// console.log(user);
// console.log("++++++++++++++");
// console.log(user._doc);
// const accessToken = jwt.sign({username: user.username},process.env.ACCESS_TOKEN) 
//         res.json({...rest, accessToken}); // returns single object with rest and accesstoken, this token user to segregate wishlist to who loggedin
//     }catch(err){
//      console.log(err);
//     }
// })

 module.exports =router;
