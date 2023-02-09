const Transit = require("../models/transit")


exports.createTransit = async(req,res)=>{
    try {
        const {area , distance , productDelivered , labour , date } = req.body
        res.json(await new Transit({
            area , distance , productDelivered , labour , date 
        }).save())
    } catch (error) {
       res.status(400).send("Sorry creating the transit instance failed") 
    }
}

exports.getTransits = async(req,res)=>{
    try {
        let Transits = await Transit.find({})
        .sort([["createdAt", "desc"]])
        .exec();
        res.json(Transits)
    } catch (error) {
        res.json("sorry we couldn't fetch the transits")
    }
}

exports.updateTransit = async(req,res)=>{
    try {
        const updated = await Transit.findOneAndUpdate(
            {area:req.params.area},
            req.body,
            {new:true}
        ).exec()
        res.json(updated)
    } catch (error) {
        res.json("sorry we couldn't update the transits")
    }
}