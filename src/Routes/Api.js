const express = require('express');
const UserController = require('../Controllers/UserController');
const InfoController = require('../Controllers/InfoController');
// const AuthVerifyMiddleware = require('../Middleware/AuthVerifyMiddleware')
const router = express.Router();

// User
router.post('/CreateUser',UserController.CreateUser);
// router.post('/LoginUser',AuthVerifyMiddleware,UserController.UserLogin);

// Info
router.post('/CreateInfo',InfoController.CreateInfo)
router.get('/GetInfo',InfoController.GetInfo);
router.get('/GetInfoById/:id',InfoController.GetInfoById);
router.patch('/UpdateInfo/:id',InfoController.UpdateInfo);
router.delete('/DeleteInfo/:id',InfoController.DeleteInfo);

// Info By Head
router.get('/ReadBySalary',InfoController.ReadBySalary);
router.get('/ReadBySell',InfoController.ReadBySell);
router.get('/ReadByOfficeRent',InfoController.ReadByOfficeRent);
router.get('/ReadByStationary',InfoController.ReadByStationary);

// Summary
router.get('/ReadBySummary',InfoController.ReadBySummary);
router.get('/ReadByTotalType',InfoController.ReadByTotalType);




module.exports = router;

