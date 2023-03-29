const {Schema, model} = require('mongoose');

const item = new Schema({
    Title: {
        type: String,
      
    }, 
    FileFollder: {
        type: String, 
     
    }, 
    Descer: {
        type: String, 
      
    }, 
    Price: {
        type: Number,
     
    }, 
    KW: {
        type: Number, 
    }, 
    V: {
        type: Number,
    }, 
    keywords: {
        type: [],
       
    }, 
    inStock: {
        type: Boolean, 
     
    }
})

module.exports = model('item', item)