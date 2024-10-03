const InfoModel = require('../Models/InfoModel')

// create Info
exports.CreateInfoService = async(data) =>{
    const result = await InfoModel.create(data)
    return result
}

// get Info by user email
exports.ReadInfoByUserService = async(Email) =>{
    const infos = await InfoModel.find({Email})
    // console.log(infos)
    return infos
}

// get Info By Id
exports.ReadByUserIDService = async(InfoId) =>{
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
exports.ReadBySalaryService = async(Email) =>{
    const result = await InfoModel.find({$and:[{Head:{$in:['Salary']}}, {Email:Email}]})
    return result
}

// sell info
exports.ReadBySellService = async(Email) =>{
    const result = await InfoModel.find({$and:[{Head:{$in:['Sell']}}, {Email:Email}]})
    console.log(result)
    return result
}

// sell info
exports.ReadByOfficeRentService = async(Email) =>{
    const result = await InfoModel.find({$and:[{Head:{$in:['Office Rent']}}, {Email:Email}]})
    console.log(result)
    return result
    }
 

// sell info
exports.ReadByStationaryService = async(Email) =>{
    const result = await InfoModel.find({$and:[{Head:{$in:['Stationary']}}, {Email:Email}]})
    return result
}

// Summary
exports.ReadBySummaryService = async(Email) =>{
    const result = await InfoModel.aggregate([{$match:{Email:Email}},{$group:{_id:'$Type',total:{$sum:'$Amount'}}}])
    return result
}

// Total Type
exports.ReadByTotalTypeService = async(Email) =>{
    const result = await InfoModel.aggregate([{$match:{Email:Email}},{$group:{_id:'$Head',total:{$sum:'$Amount'}}}])
    return result
}





