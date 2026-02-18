const followModel = require("../models/follow.model");

const followUserController = async (req, res) => {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (followerUsername === followeeUsername) {
    return res.status(400).json({
      message: "You can't Follow Yourself",
    });
  }

  const isfolloweeExists = await followModel.findOne({
    username:followeeUsername
  })
  if(!isfolloweeExists){
    return res.status(404).json({
      message: "User you are trying to follow, does not Exists",
    });
  }

  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });
  if(isAlreadyFollowing){
    return res.status(200).json({
      message: `You're Already following ${followeeUsername} `,
      follow:isAlreadyFollowing
    });
  }

  res.status(201).json({
    message: `Your are now following ${followeeUsername} `,
    follow: followRecord,
  });
};

module.exports = followUserController;
