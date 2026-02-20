const express = require('express');
const {followUserController, unFollowUserController} = require('../controllers/user.controller');
const identifyUser = require('../middlewares/auth.middleware');

const userRouter = express.Router()

/**
 * @route POST /api/users/follow/:username
 * @description Follow a user
 * @access Private
 */
userRouter.post("/follow/:username", identifyUser,followUserController)

/**
 * @route POST /api/users/unfollow/:userid
 * @description Follow a user
 * @access Private
 */
userRouter.post("/unfollow/:username", identifyUser,unFollowUserController)



module.exports = userRouter;