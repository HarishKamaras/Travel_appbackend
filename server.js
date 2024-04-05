const express = require('express');
// step 3
const mongoose =require('mongoose');
const app = express();
// step 3
const connectDB =require("./config/dbconfig");
// step 2
const hotelRouter = require("./routes/hotel.route") 
// step 4
const hotelDataAddedToDBRouter = require("./routes/dataimport.router");

//step 5 
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");
const categoryRouter = require("./routes/category.route");

//step 6

const singleHotelRouter = require("./routes/singlehotel.route");

//step 7
 const authRouter = require("./routes/auth.router");

 //step 8
 const  wishlistRouter =require("./routes/wislist.router");
// step 2
app.use(express.json()); // ?
// // step 3
connectDB(); // calling connect DB funciton
const PORT = 3500;

// step 1
app.get("/", (req, res)=>{
    res.send("hello harish your teavel app")
})

// step 2
// used to get
app.use("/api/hotels", hotelRouter)

// step 4
// used for post
app.use("/api/hoteldata", hotelDataAddedToDBRouter)

//step 5
app.use("/api/categorydata", categoryDataAddedToDBRouter)
app.use("/api/category", categoryRouter)

//step 6
app.use("/api/hotels", singleHotelRouter);

//step 7
app.use("/api/auth", authRouter);

//step 8
app.use("/api/wishlist", wishlistRouter);
// step 1
// app.listen(process.env.PORT || PORT, ()=>{
//     console.log("Server is up and running da loosu")
// })

mongoose.connection.once("open",()=>{
    console.log("connected to DB")
    app.listen(process.env.PORT || PORT, ()=>{
        console.log("Server is up and running da loosu")
    })    
})

