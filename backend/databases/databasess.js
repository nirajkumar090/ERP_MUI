require('dotenv').config()
const mongoose = require('mongoose')

const URL = process.env.MONGO_URL;

const connect_DB = async()=>{
    try {
        await mongoose.connect(URL)
        console.log(` Server connected Successfully !`)
    
    } catch (error) {
        console.log(`Error from server ${error}`)
    }
    


}

module.exports = connect_DB