const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogSchema = new Schema({
   title : {
        type : String,
        unique : true
       
   },
   subTitle : {
    type : String
   } ,
   description : {
    type : String
   }
},
{
    timestamps : true
})

const Blog = mongoose.model("Blog",blogSchema)
//Alternative
//module.experts = mongoose.model("Blog", blogschema)
module.exports = Blog