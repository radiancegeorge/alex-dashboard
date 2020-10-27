const express = require('express');
const getData = express.Router();
const db = require('./database/db')

getData.get('/:cat', (req, res)=>{
    const cat = req.params.cat
    const sql = `select * from ${cat}`;
    db.query(sql, (err, result)=>{
        if(err)throw err;
        res.status(200).send(result);
    })
})

module.exports = getData