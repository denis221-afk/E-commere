const {Schema, model} = require('mongoose');

const item = new Schema({
    Title: {
        type: String,
        required: true,
    }, 
    FileFollder: {
        type: String, 
        required: true
    }, 
    Descer: {
        type: String, 
        required: true,
    }, 
    Price: {
        type: Number,
        required: true
    }, 
    KW: {
        type: Number, 
    }, 
    V: {
        type: Number,
    }, 
    keywords: {
        type: [],
        required: true
    }, 
    inStock: {
        type: Boolean, 
        required: true
    }
})

module.exports = model('item', item)