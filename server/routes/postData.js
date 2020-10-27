const express = require('express');
const db = require('./database/db')
const postData = express.Router();

postData.post('/update', (req, res)=>{
    const cat = req.body.cat;
    const data = req.body.data;
    console.log(req.body)
    // console.log(req.body.data)
    if (cat === 'applications' || cat === 'certificates' || cat === 'education'
        || cat === 'experience' || cat === 'hobbies' || cat === 'memberships' || cat === 'reference'
        || cat === 'summary' || cat === 'manuscript' || cat === 'expertise'){
            //send to database
            //check if database empty if not update
            const sql = `select * from ${cat}`;
            db.query(sql, (err, result)=>{
                if(err)throw err;
                if(result.length < 1){
                    const sql = `insert into ${cat} (data) values (?)`;
                    db.query(sql, data, (err, result)=>{
                        if(err)throw err;
                        console.log('added to ' + cat);
                        res.status(200).send()
                    } )
                }else{
                    const sql = `update ${cat} set data = ? where id = 1`;
                    db.query(sql, data, (err, result)=>{
                        if(err)throw err;
                        console.log(`${cat} updated...`);
                        res.status(200).send()
                    })
                }
            })
    }
  
    if(cat === 'contact'){
        const sql = `select * from ${cat}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            if (result.length < 1) {
                const sql = `insert into ${cat} (email, phone_number, address,state_country) values (?,?,?,?)`;
                db.query(sql, [data.email,
                data.phone_number,
                data.address,
                data.state_country,
                ], (err, result) => {
                    if (err) throw err;
                    console.log('inserted into ' + cat);
                    res.status(200).send()
                })
            } else {
                const sql = `update  ${cat} set ?  where id = 1`;
                db.query(sql, data, (err, result) => {
                        if (err) throw err;
                        console.log('updated ' + cat);
                        res.status(200).send()
                    })
            }
        })   
    }
    if(cat === 'details'){
      const sql = `select * from ${cat}`;
      db.query(sql, (err,result)=>{
          if(err)throw err;
          if(result.length < 1){
              const sql = `insert into ${cat} (first_name, middle_name, last_name,gender, dob, nationality, marital_status) values (?,?,?,?,?,?,?)`;
              db.query(sql, [
              data.first_name,
              data.middle_name,
              data.last_name,
              data.gender,
              data.dob,
              data.nationality,
              data.marital_status,], (err, result)=>{
                      if(err)throw err;
                      console.log('inserted into ' + cat);
                      res.status(200).send()
                  })
          }else{
              const sql = `update  ${cat} set ?  where id = 1`;
              db.query(sql, data , (err, result)=>{
                  if(err)throw err;
                  console.log('updated ' + cat);
                  res.status(200).send()
              })
          }
      })  
    }
    
    if(cat === 'languages'){
        const sql = `insert into ${cat} (language, rate) values(?,?)`;
        db.query(sql, [data.languagesData, data.languagePercentage], (err, result)=>{
            if(err)throw err;
            console.log(`inserted into ${cat}`);
            res.status(200).send()
        })
    }
  
    if(cat === 'skills'){
        const sql = `insert into ${cat} (skill, rate) values (?,?)`;
        
        db.query(sql, [data.skillData, data.skillPercent], (err, result)=>{
            if(err)throw err;
            console.log(`${cat} added`);
            res.status(200).send()
        })
        
    }

    
})
// db.query('show columns from skills', (err, result)=>{
//     console.log(result)
// })

module.exports = postData