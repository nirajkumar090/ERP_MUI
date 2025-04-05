require('dotenv').config();
const express = require('express');
const connect_DB = require('./databases/databasess');
const Router = require('./routers/router');
const app = express();
// const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use('/auth',Router)


connect_DB().then(()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`server is running port ${PORT}`)
        })
        
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT,()=>{
    try {
        
    } catch (error) {
    
    }
})