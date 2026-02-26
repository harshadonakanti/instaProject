import usePost from "../hooks/usePost";

const Post = ({ user, post,loading, handleLike, handleUnLike }) => {


  return (
    <>
      <div className="post">
        <div className="user">
          <div className="img-wrapper">
            <img src={user.profile_img} alt="" />
          </div>
          <p>{user.username}</p>
        </div>
        <img src={post.img_url} alt="" />
        <div className="icons">
          <div className="left">
            <button>
              <i
                className={`${
                  post.isLiked ? "ri-heart-fill like" : "ri-heart-line"
                }`}
                onClick={()=>{post.isLiked?handleUnLike(post._id):handleLike(post._id)}}
              ></i>
            </button>
            <button>
              <i className="ri-chat-1-line"></i>
            </button>
            <button>
              <i className="ri-share-line"></i>
            </button>
          </div>
          <div className="right">
            <button>
              <i className="ri-bookmark-line"></i>
            </button>
          </div>
        </div>
        <div className="bottom">
          <p className="caption">{post.caption}</p>
        </div>
      </div>
      
    </>
  );
};

export default Post;
