const knex = require("../models/db_connection");
const router = require('express').Router();

//for insrting details of candidates in database
router.post('/insert',(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let first_round = req.body.first_round;
    let second_round = req.body.second_round;
    let third_round = req.body.third_round ;

    knex("candidate")
    .insert({
            name:name,
            email:email,
            first_round:first_round,
            second_round:second_round,
            third_round:third_round
    })
    .where('first_round','<=','10').orWhere('second_round','<=','10').orWhere('third_round','<=','10')
    .then(data=>{
        res.send(data)
        console.log("data successful insert");
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})

// find maxium value of all round score
router.get("/max",(req,res)=>{
   knex('candidate').max({a:'first_round',b:'second_round',c:'third_round'})
   .then(data=>{
       res.send(data);
       console.log(data);
   })
   .catch(err=>{
       console.log(err);
   }) 
})

//find average value of a candidate by this name through API 
router.get('/avarage/:name',(req,res)=>{
    knex.select('first_round ','second_round','third_round').from('candidate').where('name',req.params.name)
    .then(data=>{
        console.log(data);
        res.send(data)
    }).catch(err=>{
        console.log(err);
    })
});

//for exporting file i have use module.export
module.exports = router;
