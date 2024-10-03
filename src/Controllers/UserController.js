const jwt = require("jsonwebtoken");
const UserServices = require("../Service/UserServices")
const UserModel = require('../Models/UserModel')
const bcrypt = require("bcrypt");


exports.CreateUser = async(req, res) => {
  try {
      const userInfo = req.body;
      // console.log(userInfo)
      const result = await UserServices.CreateUserService(userInfo)
      // console.log(result)
      res.status(200).json({status:'success',message:"User Create successfully"})
  } catch (error) {
      res.status(400).json({status:'failed',message:"Do not create user"})
  }
};

exports.GetUserInfo = async(req, res) => {
  try {
      const user = await UserServices.findUserByEmailService(req.user?.Email)
      // console.log(result)
      res.status(200).json({status:'success',data:user.Email})
  } catch (err) {
      res.status(400).json({status:'failed',error:err.message})
  }
};


// ---------------------- handle Login ----------------------
exports.LoginUser = async (req,res) => {
  const { Email, Password } = req.body;
  // console.log(req.body)

  try {
    // all fields are required
    // if (!Email || !Password) {
    //   return { status: 401, message: "All fields are required" };
    // }

    const user = await UserModel.findOne({ Email:Email, Password:Password });
    
    if(!user){
      return res.status(400).json({status:"failed",message:"Invalid email or password"})
    }

    // Generate Token
    const token = jwt.sign({ Email }, 'SecretKey123');

    // send token as response
    res.status(200).json({ status: "success", message: "Login successful", token:token });
  } catch (error) {
    console.error(`${error.message}`);
    res.status(400).json({ status: "failed", error: error.message });
  }
};
