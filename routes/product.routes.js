'use strict'

const router = require('express').Router();
const {getProducts,/*createProducts*/} = require('../controllers/product.controllers');


router.get('/products',getProducts);
//router.post('/products',createProducts);


module.exports = router;