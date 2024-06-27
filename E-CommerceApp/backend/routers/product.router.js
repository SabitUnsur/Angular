const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const uuid = require('uuid');
const fs = require('fs');
const services = require('../services/index');

router.post('/add',services.fileService.array("images"),async(req,res)=>{
    services.responseService(res,async()=>{
        const {name,price,description} = req.body;
        const images = req.files.map(file=>file.filename);
        const product = new Product({
            name,
            price,
            description,
            images
        });
        await product.save();
        res.json({message:"Product added successfully"});
    })
})