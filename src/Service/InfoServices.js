const InfoModel = require('../Models/InfoModel')

// create Info
exports.CreateInfoService = async(data) =>{
    const result = await InfoModel.create(data)
    return result
}

// get Info
exports.GetInfoService = async() =>{
    const infos = await InfoModel.find({})
    return infos
}

// get Info By Id
exports.GetInfoByIdService = async(InfoId) =>{
    const info = await InfoModel.findOne({_id:InfoId})
    return info
}

// Update Info By Id
exports.UpdateInfoService = async(InfoId,reqBody) =>{
    const result = await InfoModel.updateOne({_id:InfoId},{$set:reqBody},{runValidators:true})
    return result
}

// Info delete
exports.DeleteInfoService = async(id) =>{
    const result = await InfoModel.deleteOne({_id:id})
    return result
}

// salary info
exports.ReadBySalaryService = async() =>{
    const result = await InfoModel.find({Head:{$in:['Salary']}})
    return result
}

// sell info
exports.ReadBySellService = async() =>{
    const result = await InfoModel.find({Head:{$in:['Sell']}})
    return result
}

// sell info
exports.ReadByOfficeRentService = async() =>{
    const result = await InfoModel.find({Head:{$in:['Office Rent']}})
    return result
}

// sell info
exports.ReadByStationaryService = async() =>{
    const result = await InfoModel.find({Head:{$in:['Stationary']}})
    return result
}

// Summary
exports.ReadBySummaryService = async() =>{
    const result = await InfoModel.aggregate([{$group:{_id:'$Type',total:{$sum:'$Amount'}}}])
    return result
}

// Total Type
exports.ReadByTotalTypeService = async() =>{
    const result = await InfoModel.aggregate([{$group:{_id:'$Head',total:{$sum:'$Amount'}}}])
    return result
}





