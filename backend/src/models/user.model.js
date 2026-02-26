const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is Required"],
    unique: [true, "username is already exists"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: [true, "Email is already exists"],
  },
  password: {
    type: String,
    required: [true, "password is Required"],
    select:false
  },
  bio: {
    type: String,
  },
  profile_img: {
    type: String,
    default: "https://ik.imagekit.io/ifpmcs1fa/Default_pfp.jpg",
  },
});

const userModel = new mongoose.model("users", userSchema)

module.exports = userModel
