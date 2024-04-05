//step 10
const User = require("../model/user.model");
const CryptoJS = require('crypto-js')

const jwt =require("jsonwebtoken");

const loginHandler = async(req,res)=>{
    try{
        const user = await User.findOne({number:req.body.number});
        !user && res.status(401).json({message:"Incorrect mobile number"}); // it returns entire object and store in user

        const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY)
        .toString(CryptoJS.enc.Utf8);

        decodedPassword !== req.body.password && res.status(401).json({message: " Incorrect password"});

        const {password, ...rest}=user._doc; // to retrun object without password by destructing
        // or
        // const {password, ...rest}=user; works without ._doc also
// _ doc all the details are present
console.log(user);
console.log("++++++++++++++");
console.log(user._doc);
const accessToken = jwt.sign({username: user.username},process.env.ACCESS_TOKEN) 
        res.json({...rest, accessToken}); // returns single object with rest and accesstoken, this token user to segregate wishlist to who loggedin
    }catch(err){
     console.log(err);
    }
}

module.exports =loginHandler;

// post : http://localhost:3500/api/auth/login 

// {
//     "number": 999955662211,
//     "password": "ravi34567654321"
// }