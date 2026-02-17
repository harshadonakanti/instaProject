const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerRoute(req, res) {
  const { username, email, password, bio, profile_img } = req.body;
  
  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message:
        isUserAlreadyExists.email == email
          ? "email Already Exists"
          : "username already Exists",
    });
  }

  const hash =await  bcrypt.hash(password,10 );

  const user = await userModel.create({
    username,
    email,
    bio,
    profile_img,
    password: hash,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.jwt_secret,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user Created",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profile_img: user.profile_img,
    },
    token,
  });
}




async function loginRoute(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }



  const isPasswordVaild = await bcrypt.compare(password, user.password)

  if (!isPasswordVaild) {
    return res.status(401).json({
      message: "invalid Credentials",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.jwt_secret,
    { expiresIn: "1d" },
  );
  res.cookie("token", token);

  res.status(200).json({
    message: "loggedIn Successfully",
    token,
  });
}

module.exports = {
  registerRoute,
  loginRoute
}