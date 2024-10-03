const express = require('express');
const UserController = require('../Controllers/UserController');
const InfoController = require('../Controllers/InfoController');
const {AuthVerifyToken} = require('../Middleware/AuthVerifyToken')
const router = express.Router();

// User
router.post('/CreateUser',UserController.CreateUser);
router.post('/LoginUser',UserController.LoginUser);

// user Info
router.get("/GetUserInfo", AuthVerifyToken,  UserController.GetUserInfo)

// Info
router.post('/CreateInfo',AuthVerifyToken, InfoController.CreateInfo)
router.get('/ReadInfoByUser', AuthVerifyToken, InfoController.ReadInfoByUser);
router.get('/ReadByUserID/:id',InfoController.ReadByUserID);
router.patch('/UpdateInfo/:id',InfoController.UpdateInfo);
router.delete('/DeleteInfo/:id',AuthVerifyToken,InfoController.DeleteInfo);

// Info By Head
router.get('/ReadBySalary',AuthVerifyToken,InfoController.ReadBySalary);
router.get('/ReadBySell',AuthVerifyToken,InfoController.ReadBySell);
router.get('/ReadByOfficeRent',AuthVerifyToken,InfoController.ReadByOfficeRent);
router.get('/ReadByStationary',AuthVerifyToken,InfoController.ReadByStationary);

// Summary
router.get('/ReadBySummary',AuthVerifyToken,InfoController.ReadBySummary);
router.get('/ReadByTotalType',AuthVerifyToken,InfoController.ReadByTotalType);




module.exports = router;

