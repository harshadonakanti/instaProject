const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type:String,
    },
    followee: {
      type: String,
    },
    status:{
      type:String,
      default:"pending",
      enum:{
        values:["pending", "accepted","Rejected" ],
        message:"Status can only be Pending, accepted or Rejected"
      }
    }
  },
  {
    timestamps: true,
  },
);
followSchema.index({followee:1, follower:1}, {unique:true})
const followModel = new mongoose.model("follows", followSchema) 
module.exports = followModel;