const express = require("express");
const { registerRoute, loginRoute } = require("../controllers/auth.controller");


const authRouter = express.Router();

authRouter.post("/register",registerRoute );

authRouter.post("/login",loginRoute );

module.exports = authRouter;
