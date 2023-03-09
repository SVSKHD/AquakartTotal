const Mongoose = require("mongoose")

const AquaBlogSchema = new Mongoose.Schema({
name:{
type:String
},
description:{
type:String
},
keywords:{
type:String
},
keyphrases:{
type:String
},
category:{

},
published:{
    type:Boolean
}
})

module.exports = Mongoose.model('AquaBlog' , AquaBlogSchema)