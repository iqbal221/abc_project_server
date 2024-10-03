const express = require('express')
const cors = require('cors')
const routes = require('./src/Routes/Api')
const colors = require('@colors/colors');
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()

// middleware
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('node-mongo project server is running')
})

// route end point
app.use('/api/v1/',routes)


// Not found route
app.get('*',(req,res)=>{
    res.send('404 Not Found anything')
})

// database connection
//Database
// const URI =
//   "mongodb+srv://zahed:681562@cluster0.t4uwg.mongodb.net/INVENTORY?retryWrites=true&w=majority";
// const OPTION = { autoIndex: true };
// mongoose.connect(process.env.MONGO_URI, OPTION)
// .then(()=>{
//     console.log(`database connected successfully`.blue)
// })
// .catch((err)=>{
//     console.error(err)
// })
mongoose.connect(process.env.database_local).then(()=>{
   console.log(`database connected successfully`.blue)  
})

// server port
const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`server is running at ${port}`.red)
})


module.exports = app;

