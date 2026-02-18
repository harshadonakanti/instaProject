const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const postModel = require("../models/post.model.js");

const imgKit = new ImageKit({
  privateKey: process.env.imgkit_private_Key,
});

const postController = async (req, res) => {
  const file = await imgKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "test",
    folder: "instaProject",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    img_url: file.url,
    user: req.user.id, // before user:decoded.id
  });

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

const getPostDetails = async (req, res) => {
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
    post
  });

};
module.exports = { postController, getPostController, getPostDetails };
