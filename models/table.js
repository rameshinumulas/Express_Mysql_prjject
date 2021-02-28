const knex = require("../models/db_connection");

knex.schema.hasTable('candidate').then(exites=>{
    if (!exites){
        knex.schema.createTable('candidate',(table)=>{
            table.string('name');
             table.string('Email');
             table.integer('first_round',10);
             table.integer('second_round',10);
             table.integer('third_round',10);

        })
        .then(data=>{
            console.log("your table are connect successfully..");
        })
        .catch(err=>{
            console.log(err);
        });
    }
    else{
        console.log("your database alredy created...");
    }

});

module.exports = knex;