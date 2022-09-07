const express = require("express");

const app = express();

const dbconnection = require("./database");
const productRoute = require("./routes/productsRoute");

app.use('/api/products/', productRoute);


app.get("/", (req, res) => {
    res.send("This is from backend")
});


const port = 8000;

app.listen(port, () => console.log("Node JS server is started"));