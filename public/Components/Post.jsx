import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faComments} from '@fortawesome/free-solid-svg-icons'
function Post({img}) {
  return (
    <div className="post">
      <figure className="post-image">
        <img src={img} alt="" />
      </figure>
      <div className="post-hover">
        <div className="post-hover-icon">
            <FontAwesomeIcon icon={faHeart}/>
            <small>16</small>
        </div>
        <div className="post-hover-icon">
            <FontAwesomeIcon icon={faComments}/>
            <small>2</small>
        </div>
      </div>
    </div>
  );
}

export default Post;
