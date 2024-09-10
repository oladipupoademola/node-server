// All functions
const User = require("../models/userModel") 

const registerUser = async (req, res) => {
    const{firstName, lastName, email, phone, password} = req.body
    const userExist = await User.findOne({email})
    if(userExist) {
        return res.status(400).json({message: "User already exist"})
    }

    const user = await User.create({firstName, lastName, email, phone, password})
    if(user){
    return res.status(201).json({message: "User created successfully"})
    }else{
        res.status(400).json({error: "invalid user data"})
    }
}

const registerAdmin = async (req, res) => {
    const{firstName, lastName, email, phone, password}=req.body
    const userExist = await User.findOne({email})
    if(userExist) {
        return res.status(400).json({message: "User already exist"})
    }

    const user = await User.create({firstName, lastName, email, phone, password, isAdmin:true})
    if(user){
    return res.status(201).json({message: "User created successfully"})
    }else{
        res.status(400).json({error: "invalid user data"})
    }

}

module.exports = {
    registerUser,
    registerAdmin
}