const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    orderId: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // Un pedido contiene varios productos 
    products: [{
        type: mongoose.Schema({
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
        }),
        required: true
    }], 
    address: {
        type: String,
        required: true
    }, 
    street: {
        type: String,
        required: true
    }, 
    country: {
        type: String,
        required: true
    }, 
    stateName: {
        type: String,
        required: true
    }, 
    zipCode: {
        type: Number,
        required: true
    },
    paymentType: {
        type:String,
        required: true
    },
    nameOnCard: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expiration: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    shipped: {
        type: Boolean,
        required: false,
        default: false
    }
})

module.exports = mongoose.model("Order", OrderSchema)