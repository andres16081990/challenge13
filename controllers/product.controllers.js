'use strict'
const Products = require('../models/produc.models')


const getProducts = async(req,res)=>{
    const products = await Products.find({},{ __v: false });
    res.status(200).json(products);
    res.header(Content-Type, ['application/json'])
}

// const createProducts = async(req,res)=>{
//     const {name,price} = req.body;
//     try {
//         const products = new Products({name,price});
//         await products.save();
//         res.status(200).json({message: 'product created'});
//     } catch (error) {
//         console.log(error);
//     }

// }

module.exports = {getProducts,
    /*createProducts*/};