//step 9

const jwt = require('jsonwebtoken');

const verifyUser = (req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, process.env.ACCESS_TOKEN, (err,user)=>{
            if(err) res.status(403).json({message: "invalid token"})
            req.user =user;
        next() // next exicutes call back funtion next to it, where verifyUser is used
        })

        // function verify(token: string, secretOrPublicKey: jwt.Secret, options: jwt.VerifyOptions & {
        //     complete: true;
        // }): jwt.Jwt (+6 overloads)
    }
}

module.exports = verifyUser;

// we use this middleware where we need to authenticate eg.) wishlist, cart ...etc