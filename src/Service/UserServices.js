const UserModel = require('../Models/UserModel')

// create Info
exports.CreateUserService = async(data) =>{
    const result = await UserModel.create(data)
    return result
}