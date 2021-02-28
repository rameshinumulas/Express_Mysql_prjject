const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000

app.use(express.json());

const table = require("./models/table");
const router = require("./controllers/index");
app.use(router);


app.listen(PORT,()=>{
    console.log(`server is running on port${PORT}`);
})