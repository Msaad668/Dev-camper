const express = require('express');
const dotenv = require('dotenv');

// get routes 
const bootcamps = require('./routes/bootcamps');
//load env vars 
dotenv.config({path: './config/config.env'})
const app = express();

// mount routers 
app.use('/api/v1/bootcamps', bootcamps);


const PORT = 5000;
app.listen( PORT ,
    console.log(`server started on port ${PORT}`)
);