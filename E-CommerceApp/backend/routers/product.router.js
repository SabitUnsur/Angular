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
            _id:uuid.v4(),
            name,
            price,
            description,
            images
        });
        await product.save();
        res.json({message:"Product added successfully"});
    })
})

router.post('/removeById/:productId',async(req,res)=>{
    services.responseService(res,async()=>{
        const {_id} = req.params;
        const productToDelete = await Product.findById(_id);
        productToDelete.images.forEach(image=>{
            fs.unlink(`uploads/${image}`,()=>{}); 
        })
        await Product.findByIdAndDelete(productToDelete._id);
        res.json({message:"Product deleted successfully"});
    })
})

router.get('/',async(req,res)=>{
    services.responseService(res,async()=>{
      const {pageNumber,pageSize,search} = req.body;
      let productCount = await Product.find({
        $or:[ 
            {
                name:{ $regex:search,$options:'i'}
            }
        ]
      }).count();
      
      let products = await Product.find({
        $or:[ 
            {
                name:{ $regex:search,$options:'i'}
            }
        ]
      }).sort({name:1})
      .populate('categories')
      .skip((pageNumber-1)*pageSize) //kaçıncı veriden başlayacağını belirler
      .limit(pageSize); //kaç tane veri çekileceğini belirler


      let totalPageCount=Math.ceil(productCount/pageSize);

      let model ={
        datas:products,
        pageNumber:pageNumber,
        pageSize:pageSize,
        totalPageCount:totalPageCount,
        isFirstPage:pageNumber==1 ? true:false,
        isLastPage:totalPageCount==pageNumber ? true:false
      }

      res.status(200).json(model);

    })


})
