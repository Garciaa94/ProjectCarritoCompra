const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    phone: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }, 
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
    }
})

module.exports = mongoose.model("User", UserSchema)