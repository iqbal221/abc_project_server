const express = require('express')
const cors = require('cors')
const routes = require('./src/Routes/Api')


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
    res.send('404 Not Found')
})


module.exports = app;

