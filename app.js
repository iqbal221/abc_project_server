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


app.use('/api/v1/',routes)


module.exports = app;

