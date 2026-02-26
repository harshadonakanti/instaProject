const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const postModel = require("../models/post.model.js");
const likeModel = require("../models/like.model.js");

const imgKit = new ImageKit({
  privateKey: process.env.imgkit_private_Key,
});

const postController = async (req, res) => {
  const file = await imgKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "test",
    folder: "instaProject",
  });

  let post = await postModel.create({
    caption: req.body.caption,
    img_url: file.url,
    user: req.user.id, // before user:decoded.id
  });

  // post = await post.populate("user");

  res.status(201).json({
    message: "post created Successfully",
    post,
  });
};

const getPostController = async (req, res) => {
  // let userId = decoded.id

  let posts = await postModel.find({
    user: req.user.id, // before user:decoded.id
  });

  res.status(200).json({
    message: "data fetched !!!!!!!!!",
    posts,
  });
};

const getPostDetailsController = async (req, res) => {
  const postId = req.params.postId;
  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "Post not Found",
    });
  }
  const isValidUser = req.user.id === post.user.toString(); // before user:decoded.id
  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbidden Content",
    });
  }

  return res.status(200).json({
    message: "Post Fetched Successfully",
    post,
  });
};

const getFeedController = async (req, res) => {
  const user = req.user;

  const posts = await Promise.all(
    (await postModel.find().sort({_id:-1}).populate("user").lean()).map(async (post) => {
      const isLiked = await likeModel.findOne({
        user: user.username,
        post: post._id,
      });
      post.isLiked = !!isLiked;
      return post;
    }),
  );

  res.status(200).json({
    message: "post feteched Suceesfully",
    posts,
  });
};

module.exports = {
  postController,
  getPostController,
  getPostDetailsController,
  getFeedController,
};
