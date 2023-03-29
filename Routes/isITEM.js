const {Router} = require('express');
const router = Router();
const modelItem = require('../Modules/Item'); 
const uuid = require('uuid').v4;
const fs = require('fs')

router.post('/ITEM/ADD', async (req, res) => {

    const {Title, Descer, Price, KW, V, keywords, inStock} = req.body;
    const follder = uuid();
    const item = new modelItem({
        Title: Title, 
        FileFollder: `${follder}`,
        Descer,
        Price,
        KW,
        V,
        keywords, 
        inStock
    });

    fs.mkdir(`./client/public/Assets/${follder}`, (err) => {
        if(err) throw err
    });

    await item.save();


    res.status(200).json({masenge: 'Вова пішов Нахуй!!! А так то все ок!'})

})

module.exports = router;