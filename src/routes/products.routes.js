const express = require('express');
const router = express.Router();
const controller = require('../controller/index');
const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        let imgFolder = path.resolve(__dirname, '../public/images/products');
        cb(null, imgFolder);
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

let upload = multer({storage});

router.get('/', controller.index);
router.get('/register', controller.register);
router.post('/register', upload.single('characteri'),controller.create);

module.exports = router;