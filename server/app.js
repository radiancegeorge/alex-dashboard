require('dotenv').config()
const express = require('express');
const postData = require('./routes/postData');
const app = express();
const cors = require('cors');
const test = require('./routes/test');
const getData = require('./routes/getData');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.use('/test', test)
app.use('/dashboard', postData )
app.use('/dashboard', getData)



app.listen(4000, ()=>{
    console.log('server on port 4000')
})