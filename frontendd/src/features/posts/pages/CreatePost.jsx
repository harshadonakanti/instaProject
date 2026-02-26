import React, { useRef, useState } from "react";
import usePost from "../hooks/usePost";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const navigate = useNavigate();

  const [caption, setCaption] = useState("");
  const postImageInputFieldRef = useRef(null);

  const { loading, handleCreatePost } = usePost();

  async function handleSubmit(e) {
    e.preventDefault();

    const file = postImageInputFieldRef.current.files[0];
    await handleCreatePost(caption, file);

    navigate("/");
  }
  if (loading) {
    return (
      <main>
        <h1>Loading.....</h1>
      </main>
    );
  }

  return (
    <>
      <main className="create-post-page">
        <div className="form-container">
          <h1>Create Post</h1>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              name="post-caption"
              id="postCaption"
              placeholder="Enter the Caption"
              value={caption}
              onChange={(e) => {
                setCaption(e.target.value);
              }}
            />
            <label htmlFor="postImage">
              <input
                ref={postImageInputFieldRef}
                type="file"
                name="post-image"
                id="postImage"
              />
            </label>
            <button className="btn primary-btn">Create post</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default CreatePost;
