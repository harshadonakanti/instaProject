const postModel = require("../models/post.model");
const likeModel = require("../models/like.model");

const likeController = async (req, res) => {
  const username = req.user.username;
  const postId = req.params.postid;

  const post = await postModel.findById(postId)
  if(!post){
    return res.status(404).json({
      message: "No Post found",
    });
  }

  const like = await likeModel.create({
    post:postId,
    user:username
  })
  res.status(200).json({
    message: "Like add Successfully",
  });
};

module.exports = likeController;
