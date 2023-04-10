const InfoServices = require('../Service/InfoServices')


exports.CreateInfo = async(req,res)=>{
    let reqBody = req.body;
    try {
        const result = await InfoServices.CreateInfoService(reqBody)
        console.log(result)
        res.status(200).json({status:'success',message:"Data save successfully"})
    } catch (error) {
        res.status(400).json({status:'failed',message:"Data do not save"})
    }
}

exports.GetInfo = async(req,res)=>{
    try {
        const result = await InfoServices.GetInfoService()
        console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

exports.GetInfoById = async(req,res)=>{
    const InfoId = req.params.id;
    try {
        const result = await InfoServices.GetInfoByIdService(InfoId)
        console.log(result)
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
        console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

exports.DeleteInfo = async(req,res)=>{
    const id = req.params.id;

    try {
        const result = await InfoServices.DeleteInfoService(id)
        console.log(result)
        res.status(200).json({status:'success',message:"Data delete successfully"})
    } catch (error) {
        res.status(400).json({status:'failed',message:"Data do not delete"})
    }
}

// By Head

exports.ReadBySalary = async(req,res)=>{
    try {
        const result = await InfoServices.ReadBySalaryService()
        console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

exports.ReadBySell = async(req,res)=>{
    try {
        const result = await InfoServices.ReadBySellService()
        console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

exports.ReadByOfficeRent = async(req,res)=>{
    try {
        const result = await InfoServices.ReadByOfficeRentService()
        console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

exports.ReadByStationary = async(req,res)=>{
    try {
        const result = await InfoServices.ReadByStationaryService()
        console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

// Summary

exports.ReadBySummary = async(req,res)=>{
    try {
        const result = await InfoServices.ReadBySummaryService()
        console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}

exports.ReadByTotalType = async(req,res)=>{

    try {
        const result = await InfoServices.ReadByTotalTypeService()
        console.log(result)
        res.status(200).json({status:'success',data:result})
    } catch (error) {
        res.status(400).json({status:'failed',error:error.message})
    }
}



