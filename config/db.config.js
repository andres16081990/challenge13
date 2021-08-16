'use strict'

const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL|| 'mongodb://localhost:27017/JsonChallenge', 
    {useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('error', ()=> console.error('Error in DB connection'));
mongoose.connection.once('open', ()=> console.log('DB Connected'));

