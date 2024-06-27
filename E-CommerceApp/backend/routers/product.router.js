const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const uuid = require('uuid');
const fs = require('fs');
const services = require('../services/index');

router.post('/add',services.fileService.array("images"),async(req,res)=>{
    services.responseService(res,async()=>{
        const {name,price,description} = req.body;
        const product = new Product({
            _id:uuid.v4(),
            name,
            price,
            description,
            imageUrls:req.files
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


router.get('/getById/:productId',async(req,res)=>{
    services.responseService(res,async()=>{
        const {_id} = req.params;
        const product = await Product.findById(_id);
        res.json(product);
    })
})

router.get('/getByCategoryId/:categoryId',async(req,res)=>{
    const {_id} = req.params;
    services.responseService(res,async()=>{
        const products = await Product.findOne(_id).populate('categories');
        res.json(products);
    })
})


router.post('/updateById/:productId',services.fileService.array("images"),async(req,res)=>{
    services.fileService(res,async()=>{
        const {_id} = req.params;
        const {name,stock,price,categories,isActive} = req.body;
        let product = await Product.findById(_id);
        product.imageUrls.forEach(image=>{
            fs.unlink(image.path,()=>{});
        }) 

        let imageUrls=[...product.imageUrls,...req.files];

        product={
            _id:_id,
            name:name.toUpperCase(),
            stock:stock,
            price:price,
            categories:categories,
            isActive:isActive,
            imageUrls:imageUrls
        }

        await product.save();
        res.json({message:"Product updated successfully"});
    })
})


//Resim Sil
router.post('/removeImageByProductIdAndIndex/:productId',async(req,res)=>{ 
    services.responseService(res,async()=>{
        const {_id} = req.params;
        const {index} = req.body;
        let product = await Product.findById(_id);
        if(product.imageUrls.length==1){
            res.status(400).json({message:"You can't delete the last image"});
        }else{
            fs.unlink(product.imageUrls[index].path,()=>{});
            product.imageUrls.splice(index,1); //arrayden indexi sil
            await product.save();
            res.json({message:"Image deleted successfully"});
        }
      

    })
})