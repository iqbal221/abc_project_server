const jwt = require("jsonwebtoken");
const UserServices = require("../Service/UserServices")
// const UserModel = require('../Models/UserModel')
const bcrypt = require("bcrypt");


exports.CreateUser = async(req, res) => {
  try {
      const result = await UserServices.CreateUserService(req.body)
      console.log(result)
      res.status(200).json({status:'success',message:"Create user successfully"})
  } catch (error) {
      res.status(400).json({status:'failed',message:"Do not create user"})
  }
};

// ---------------------- handle Login ----------------------
// exports.LoginUser = async (req) => {
//   const { Email, Password } = req.body;

//   try {
//     // all fields are required
//     if ((!Email, !Password)) {
//       return { status: 401, message: "All fields are required" };
//     }

//     const user = await UserModel.findOne({ Email, Password });
//     // check the user exist in Database Or Not
//     if (!user) {
//       return { message: "Email Not found", status: 404 };
//     }

//     const isMatch = await bcrypt.compare(Password, user.Password);
//     //Check User Password
//     if (!isMatch) {
//       return { status: 401, message: "Wrong Password" };
//     }

//     // Generate Token
//     const token = jwt.sign({ Email: user.Email }, 'SecretKey123', {
//       expiresIn: "1h",
//     });

//     // send token as response
//     return { status: 200, message: "Login successful", token };
//   } catch (error) {
//     console.error(`${error.message}`);
//     return { status: 500, message: error.toString() };
//   }
// };
