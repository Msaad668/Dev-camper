const express = require('express');
const dotenv = require('dotenv');
//load env vars 
dotenv.config({path: './config/config.env'})
const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg:'get all bootcamps' });
})

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg:`get bootcamp ${req.params.id}` });
})

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg:`update bootcamp ${req.params.id}` });
})

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg:`delete bootcamp ${req.params.id}` });
})


app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg:'craete new bootcamp' });
})



const PORT = 5000;
app.listen( PORT ,
    console.log(`server started on port ${PORT}`)
);