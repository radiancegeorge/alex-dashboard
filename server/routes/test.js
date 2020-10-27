const express =  require('express');
const test = express.Router();
const db = require('./database/db')

test.get('/', (req, res)=>{
    db.query('select * from experience', (err, result)=>{
        if(err)throw err;
        console.log(result)
        res.render('../view/test.ejs', {data : result[0].data})
    })
})
// db.query('alter table summary modify column data mediumtext', (err, result)=>{
//     if(err)throw err;
//     console.log(result)
// })
//
module.exports = test