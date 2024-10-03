const User = require('../Models/UserModel')

// create user
exports.CreateUserService = async(data) =>{
    const result = await User.create(data)
    return result
}

// find  user
exports.findUserByEmailService = async(Email)=>{
    const result = await User.findOne({Email:Email})
    return result
}