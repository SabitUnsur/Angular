const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');
const Category = require('../models/category');

router.post('/add', async (req, res) => { 
    try {
        const {name} = req.body;
        const checkValid= await Category.findOne({name:name})
        if(checkValid)
        { res.status(400).json({message:"Category already exists"}) 
        }else{
            const category = new Category({ 
                _id:uuidv4(),
                name:name
            })
            await category.save()
            res.status(201).json({
                message: 'Category added successfully'
            });
        }          
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.post("/removeById/:categoryId", async (req, res) => { 
    try {
        const {categoryId} = req.params;
        await Category.findByIdAndDelete(categoryId)
        res.status(200).json({
            message: 'Category deleted successfully'
          });
          
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.post("/updateById/:categoryId", async (req, res) => {
    const { categoryId } = req.params;
    const { name } = req.body;

    try {
        const existingCategory = await Category.findOne({ name: name });

        if (existingCategory && existingCategory._id.toString() !== categoryId) {
            return res.status(400).json({ message: "Category with this name already exists" });
        }
        await Category.findByIdAndUpdate(categoryId, { name: name });
        return res.status(200).json({
            message: 'Category updated successfully'
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const categories = await Category.find().sort({name:1});
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({message:error.message})   
    }
})

module.exports = { 
    category:router 
}