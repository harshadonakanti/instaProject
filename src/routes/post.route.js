const express = require("express");
const {
  postController,
  getPostController,
  getPostDetails,
} = require("../controllers/post.controller.js");
const multer = require("multer");
const identifyUser = require("../middlewares/auth.middleware.js");
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

postRouter.get('/api/posts/details/:postId',identifyUser, getPostDetails)

module.exports = postRouter;
