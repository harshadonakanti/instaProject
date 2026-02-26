import { useEffect } from "react";
import Post from "../components/Post";
import usePost from "../hooks/usePost";
import "../style/feed.scss";
import Nav from "../../shared/components/Nav";

const Feed = () => {
  const { feed, handleGetFeed, loading, handleLike, handleUnLike } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  if(loading || !feed){
    return (<main><h1>Loading.....</h1></main>)
  }

 
  

  return (
    <>
      <main className="feed-page">
        <Nav/>
        <div className="feed">
          <div className="posts">
          {feed.map((e, idx)=>{
            return <Post key={idx} user={e.user} post={e} loading={loading} handleLike={handleLike} handleUnLike={handleUnLike}/>
          })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Feed;
