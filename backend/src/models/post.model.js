const mongoose  = require("mongoose");

const postSchema = new mongoose.Schema({
  caption:{
    type:String,
    default:""
  },
  img_url:{
    type:String,
    required:[true,"Img_url is Required"]
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:[true, "user Id must be Required for creating the post"]
  }
})

const postModel = new mongoose.model("posts", postSchema)

module.exports = postModel