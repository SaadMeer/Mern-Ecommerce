// Olixx_12
const express = require('express');
const router = express.Router();

const Product = require('../models/productModule');

router.get('/getallproducts', (req, res) => {
    Product.find({}, (err, docs) => {
        if(!err){
            return res.send(docs);
        }
        else{
             return res.status(400).json({
                message: 'Something went wrong'
            });
        }
    })
});

module.exports = router;