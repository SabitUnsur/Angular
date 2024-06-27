const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const uuid = require('uuid');
const fs = require('fs');

router.post('/add',async(req,res)=>{
    try {
        const{ name, stock, price, categories} = req.body;
        const product = new Product({
            _id: uuid.v4(),
            name,
            stock,
            price,
            categories
        });
        await product.save();

        res.json({message: 'Product added successfully'});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})