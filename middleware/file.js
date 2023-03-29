const multer = require('multer');
let index = 0;

const storage = multer.diskStorage({
    destination(req,file,cb) {
        cb(null, 'uploads/')
    }, 
    filename(req, file, cb) {
        cb(null, `images-${index++}.${file.mimetype.slice(6,file.mimetype.length)}`)
    }
})

const types = ['image/png', 'image/jpeg', 'image/jpg'];
const fileFilter = (req, file, cb) => {
    if(types.includes(file.mimetype)) {
        cb(null, true)
    } else{
        cb(null, false)
    }
}

const multerConfig = multer({storage, fileFilter});
const resetIndex = () => {
    index = 0;
}
module.exports = {multerConfig, resetIndex}