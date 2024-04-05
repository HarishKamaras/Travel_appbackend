//step 3 
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config(); // ? // we also add in sever.js instead of dbconfig

const connectDB = async()=>{
    try{
    await mongoose.connect(process.env.DATABASE_URI, {
        // useUnifiedTopology: true,
        // useNewUrlParser: true // useUnifiedTopology & seNewUrlParser used to avoid errors

    }) // process.env used to access the env file , need to read more on that
    // mongoose.connect returns a promise so use try,catch and asyn await it may take some connection time
}catch(err){
    console.log(err)

}
}

module.exports = connectDB;