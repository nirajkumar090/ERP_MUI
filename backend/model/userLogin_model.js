const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
})

userSchema.pre('save', async function(next){
    try {
    const User = this;
    if(!User.isModified('password')){
        next()
    }
    const saltRound = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password,saltRound)    
    this.password= hashPassword

    } catch (error) {
        console.log(error)
    }
})

const User = new mongoose.model('user_model',userSchema)

module.exports = User