import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postActions";
import style from './Posts.module.css'

function Posts() {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.a);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const renderPost = () => {
    if (postData.loading) {
      return <h2>Loading...</h2>;
    } else if (postData.loading === false) {
      return (
        <>
        
          {postData.error === null ? (
           postData.postItems.map((post) => {
              return (
                <div className={style.Card}>
                  <div className="card" style={{height:"350px", margin:"20px"}}>
                    <div className="card-body" >
                      <h3 className="card-title">Post Title: {post.title}</h3>
                      <p className="card-detail">Body : {post.body}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>{postData.error}</div>
          )}
        </>
      );
    }
  };

  return <div className={style.Card_display}>{renderPost()}</div>;
}

export default Posts;
