const mongoose = require("mongoose");

const mongoDBURL = "mongodb+srv://SaadMeer:SaadMeer@mern-cluster.6acvlqb.mongodb.net/mern-commerce";

mongoose.connect(mongoDBURL, {
    useUnifiedTopology:true,
    useNewUrlParser:true
})

const dbconnect = mongoose.connection;

dbconnect.on('error', () => {
    console.log("MongoDB connection failed");
})
dbconnect.on('connected', () => {
    console.log("MongoDB connection connected");
})

module.exports = mongoose;
