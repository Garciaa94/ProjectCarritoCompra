const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    productId: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    productWiseTotalPrice: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Product", ProductSchema)