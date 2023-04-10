const colors = require('@colors/colors');
const mongoose = require('mongoose')
require('dotenv').config()

const app = require('./app')

// database connection
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`database connected successfully`.blue)
})

// server port
const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`server is running at ${port}`.red)
})