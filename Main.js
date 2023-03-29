const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const Application = express();
const isPORT = process.env.PORT || 6666;
const isURL = process.env.DB_URL;
const routeItem = require('./Routes/isITEM');

Application.use(cors());
Application.use(express.json())
Application.use(routeItem);




(function isServer() {
    try{
        Application.listen(isPORT, () => {
            mongoose.connect(isURL);
            console.log(`server Start`, isPORT);
        })
    } catch(e) {
        console.log(e)
    }
}())




