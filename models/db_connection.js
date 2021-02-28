const dotenv = require('dotenv').config()
const knex = require('knex');

module.exports = knex({
    client:'mysql',
    connection:{
        host:process.env.host,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database
    }
},
console.log("database has been joined"));