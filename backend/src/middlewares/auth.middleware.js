const jwt = require("jsonwebtoken");

const identifyUser = async (req, res, next)=>{
  
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Unauthoried access, Token not Found",
      });
    }
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.jwt_secret);
    } catch (err) {
      return res.status(401).json({
        message: "user not Authorized",
      });
    }
    req.user = decoded // here, we can use any of the name like: req.trump or req.chacha anything
    next()
}

module.exports = identifyUser;