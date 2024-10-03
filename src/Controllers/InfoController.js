const InfoServices = require('../Service/InfoServices')
const InfoModel = require('../Models/InfoModel')


exports.CreateInfo = async(req,res)=>{
    let {SL,Name,Head,Type,Amount,Date} = req.body;

    const createInfo = {
        SL:SL,
        Name:Name,
        Head:Head,
        Type:Type,
        Amount:Amount,
        Date:Date,
        Email: req.user?.Email
    }

    // console.log(createInfo)

    try {
        const result = await InfoServices.CreateInfoService(createInfo)
        // console.log(result)
        res.status(200).json({status:'success',message:"Data save successfully"})
    } catch (error) {
        res.status(400).json({status:'failed',message:"Data do not save"})
    }
}

exports.ReadInfoByUser = async(req,res)=>{
    try {
        const result = await InfoServices.ReadInfoByUserService(req.user?.Email)
        // console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

exports.ReadByUserID = async(req,res)=>{
    const InfoId = req.params.id;
    try {
        const result = await InfoServices.ReadByUserIDService(InfoId)
        // console.log(result)
        res.status(200).json({status:'success',message:"Data Update successfully"})
    } catch (error) {
        res.status(400).json({status:'failed',message:"Data do not successfully"})
    }
}

exports.UpdateInfo = async(req,res)=>{
    const InfoId = req.params.id;
    const reqBody = req.body;
    try {
        const result = await InfoServices.UpdateInfoService(InfoId,reqBody)
        // console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

exports.DeleteInfo = async(req,res)=>{
    try {
        const {id} = req.params;
        console.log(id)
        const result = await InfoServices.DeleteInfoService(id)
        console.log(result)
        res.status(200).json({status:'success',data:result,message:"Data delete successfully"})
    } catch (error) {
        res.status(400).json({status:'failed',message:"Data do not delete"})
    }
}

// By Head

exports.ReadBySalary = async(req,res)=>{
    try {
        const result = await InfoServices.ReadBySalaryService(req.user?.Email)
        // console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

exports.ReadBySell = async(req,res)=>{
    try {
        const result = await InfoServices.ReadBySellService(req.user?.Email)
        // console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

exports.ReadByOfficeRent = async(req,res)=>{
    try {
        const result = await InfoServices.ReadByOfficeRentService(req.user?.Email)
        // console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

exports.ReadByStationary = async(req,res)=>{
    try {
        const result = await InfoServices.ReadByStationaryService(req.user?.Email)
        // console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

// Summary

exports.ReadBySummary = async(req,res)=>{
    try {
        const result = await InfoServices.ReadBySummaryService(req.user?.Email)
        // console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

exports.ReadByTotalType = async(req,res)=>{

    try {
        const result = await InfoServices.ReadByTotalTypeService(req.user?.Email)
        // console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}



