'use strict'

const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/JsonChallenge';

mongoose.connect(process.env.MONGODB_URL|| URL, 
    {useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('error', ()=> console.error('Error in DB connection'));
mongoose.connection.once('open', ()=> console.log('DB Connected'));

