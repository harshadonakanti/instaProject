import { useContext, useEffect } from "react";
import {
  createPost,
  getFeed,
  likePost,
  unLikePost,
} from "../services/post.api";
import { postContext } from "../post.context";

const usePost = () => {
  const data = useContext(postContext);
  const { loading, setLoading, post, setPost, feed, setFeed } = data;

  const handleGetFeed = async () => {
    setLoading(true);
    try {
      const data = await getFeed();
      setFeed(data.posts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (caption, imageFile) => {
    setLoading(true);
    try {
      const data = await createPost(caption, imageFile);
      setFeed((prev) => [data.post, ...prev]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (post) => {
    // setLoading(true);
    try {
      const data = await likePost(post);
      await handleGetFeed();
    } catch (err) {
      console.log(err);
    }
    // finally {
    //   setLoading(false);
    // }
  };
  const handleUnLike = async (post) => {
    // setLoading(true);
    try {
      const data = await unLikePost(post);
      await handleGetFeed();
    } catch (err) {
      console.log(err);
     }
     // finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    handleGetFeed();
  }, []);

  return {
    loading,
    feed,
    post,
    handleGetFeed,
    handleCreatePost,
    handleLike,
    handleUnLike,
  };
};

export default usePost;
