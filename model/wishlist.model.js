const mongoose = require('mongoose');
const wishlistSchema = new mongoose.Schema({
    hotelId: {type: String, required: true}
})

const wishlistss = mongoose.model("Wishlist", wishlistSchema);
module.exports = wishlistss;