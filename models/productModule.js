//import mongoose bcz we have to cretae mongoose model
const mongoose = require("mongoose");

//then first create schema then create model
const reviewsSchema = mongoose.Schema({

    userid:{
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        require: true
    },
    comment: {
        type: String
    },
    rating: {
        type: Number,
        require: true
    }
}, {
    timeStamps: true
})

const productSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    countInstock: {
        type: Number,
        require: true
    },
    rating: {
        type: Number,
        require: true
    },
    reviews: [reviewsSchema]
}, {
    timeStamps: true
})

// NOw create model
//Model name should start with capital letter
//first parameter is collection name then sec one is schema
const Product = mongoose.model('products', productSchema);

module.exports = Product;