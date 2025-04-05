const User = require("../model/userLogin_model");
const bcrypt = require('bcrypt')

const userRegister = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    res.status(201).send({ msg: "Please fill empty Field" });
  }

  const userExist = await User.findOne({ email: email });
  if (userExist) {
    return res.status(201).send({ msg: "User already Existed:" });
  }

  const createUser = await User.create({ name:name, email:email, phone:phone, password:password });

  res.status(200).send({msg:createUser})


  } catch (error) {
    console.log(error)
  }

};

const userLogin = async(req,res)=>{
    try {

    const {email,password} = req.body;

    if(!email || !password){
        return res.status(201).send({msg:"Please fill empty filled"})
    }

    const userExist = await User.findOne({email:email})

    if(!userExist){
        return res.status(201).send({msg:"Invaild credentails !"})
    }

    const result = await bcrypt.compare(password,userExist.password);

    if(result){
        res.status(200).send({msg:"Login Successfully !"})
    }else{
        res.status(201).send({msg:"Invaild Credentials"})
    }
        
        
    } catch (error) {
        console.log(error)
    }

}

module.exports = { userRegister,userLogin };
