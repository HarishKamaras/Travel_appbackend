//step 10
const User = require("../model/user.model");
const CryptoJS = require('crypto-js')


const signupHandler = async (req, res)=>{
    try{
        const newUser = new User ({
            username: req.body.username, // req have inbuilt objects like id, body ...etc , check above example
            number: req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()// read about this
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);// .status here is optional for posting
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Error creating a user"})
    }
 }

 //post : http://localhost:3500/api/auth/register
//  {
//     "username" : "ravi",
//     "number": 999955662211,
//     "email": "ravi@gmail.com",
//     "password": "ravi34567654321"
// }

 module.exports =signupHandler;