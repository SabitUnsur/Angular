const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: String,
    name: {
        type: String,
        required: true
    },
    imageUrls: Array,
    stock: Number,
    price: Number,
    createdDate: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    categories:[{type: String, ref: 'Category'}]
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;