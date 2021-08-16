'use strict'

// Set environment variable
require('dotenv').config();

const { urlencoded } = require('express');
// Dependencies required
const express = require('express');

// app instance
const app = express();
// Express setings
app.use(express.urlencoded({extended: true}));
app.use(express.json()); // json docoded

// require db config
require('./config/db.config');

// require routes

const router = require('./routes/product.routes')

app.use('/', router);


app.listen(process.env.PORT ,()=> console.log(`App running in port ${process.env.PORT}`));

