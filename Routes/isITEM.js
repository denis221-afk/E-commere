const {Router} = require('express');
const router = Router();
const modelItem = require('../Modules/Item'); 
const uuid = require('uuid').v4;
const fs = require('fs'); 
const fileMidd = require('../middleware/file');
const path = require('path');



router.post('/ITEM/ADD', fileMidd.multerConfig.array('img', 12) , async (req, res) => {
    const {Title, Descer, Price, KW, V, keywords, inStock} = req.body;
    const follder = uuid();
    console.log(req.body)
    const sourceDir = 'uploads'
    const item = new modelItem({
        Title: Title, 
        FileFollder: `${follder}`,
        Descer,
        Price,
        KW,
        V,
        keywords, 
        inStock: true, 
    });

    fs.mkdir(`./client/public/Assets/${follder}`, (err) => {  
        if(err) throw err
    });

    fs.readdir(sourceDir, (err, files)  => {
        if(err){
            console.log(err);
            return
        }

        files.forEach(file => {
            const sourceFile = path.join(sourceDir, file);
            const targetFile = path.join(`./client/public/Assets/${follder}`, file);

            fs.copyFile(sourceFile, targetFile, (err) => {
                if (err) {
                  console.error(err);
                  return;
            }});

            fs.unlink(sourceFile, err => {
                if (err) {
                  console.error(err);
                  return;
            }});
        })

    
    })
    
    await item.save();
    fileMidd.resetIndex();
    res.status(200).json({masenge: 'Вова пішов Нахуй!!! А так то все ок!'});
});

module.exports = router;