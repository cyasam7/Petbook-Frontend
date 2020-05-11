import React from "react";
import {AiFillHeart } from 'react-icons/ai'
import {FaComment } from 'react-icons/fa'
function Post({img}) {
  return (
    <div className="post">
      <figure className="post-image">
        <img src={img} alt="" />
      </figure>
      <div className="post-hover">
        <div className="post-hover-icon">
            <AiFillHeart/>
            <small>16</small>
        </div>
        <div className="post-hover-icon">
            <FaComment/>
            <small>2</small>
        </div>
      </div>
    </div>
  );
}

export default Post;
