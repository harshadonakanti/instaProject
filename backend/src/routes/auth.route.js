const express = require("express");
const { registerRoute, loginRoute, getMeController } = require("../controllers/auth.controller");
const identifyUser = require("../middlewares/auth.middleware");


const authRouter = express.Router();

authRouter.post("/register",registerRoute );

authRouter.post("/login",loginRoute );

authRouter.get("/get-me", identifyUser, getMeController)

module.exports = authRouter;
