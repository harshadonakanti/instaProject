const express = require("express");
const {
  postController,
  getPostController,
  getPostDetailsController,
  getFeedController,
} = require("../controllers/post.controller.js");
const multer = require("multer");
const identifyUser = require("../middlewares/auth.middleware.js");
const {likeController, unLikeController} = require("../controllers/like.controller.js");

const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

//POST /api/posts [Protected]
postRouter.post("/", upload.single("img_url"), identifyUser ,postController);

//GET /api/posts [Protected]
postRouter.get("/", identifyUser,getPostController);

/**
* GET /api/posts/details/:postId- 
* also, Return an details about the specific Post with the id. aLSO check whether the posy belongs
  to the user that the request come from
*/

postRouter.get('/details/:postId',identifyUser, getPostDetailsController)

postRouter.post("/like/:postid", identifyUser, likeController)
postRouter.post("/unlike/:postid", identifyUser, unLikeController)

/**
 * @route GET /api/posts/feed
 * @description Get all the posts created in the Db
 * @access Private
 */

postRouter.get("/feed", identifyUser, getFeedController)

module.exports = postRouter;
