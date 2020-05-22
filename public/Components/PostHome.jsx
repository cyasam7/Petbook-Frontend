import React, { useState, Fragment } from "react";
import me from "../assets/static/me.jpg";
import { Link } from "react-router-dom";
import '../assets/styles/PostHome.scss';
import { BsHeart, BsHeartFill, BsChat, BsChatSquare } from "react-icons/bs";
import ModalPost from "./ModalPost";

function PostHome() {
  const [Liked, setLiked] = useState(false);
  const [Modal, setModal] = useState(false);
  const handleLike = (e) => {
    e.preventDefault();
    setLiked(true);
  };

  const handleOpenModal = (e)=>{
    e.preventDefault();
    setModal(true);
  }
  const handleCloseModal = (e) =>{
    e.preventDefault();
    setModal(false);
  }
  const handleUnLike = (e) => {
    e.preventDefault();
    setLiked(false);
  };

  let HeartIcon = <BsHeart size="32px" onClick={handleLike} />;
  if (Liked) {
    HeartIcon = (
      <BsHeartFill size="32px" className="image-icon" color="#DF4C4C" onClick={handleUnLike} />
    );
  }
  return (
    <Fragment>
    <div className="post-home">
      <div className="post-home__header">
        <img className="post-home__header-img" src={me} alt="Imagen" />
        <h4 className="post-home__header-title">Alexander Serrano</h4>
      </div>
      <figure className="post-home__body">
        <img className="post-home__img" src={me} alt="" />
      </figure>
      <div className="post-home__description">
        <span className="description-item">
          <button className="description-item__button">
            {HeartIcon}
          </button>
        </span>
        <span className="description-item">
          <button className="description-item__button" onClick={handleOpenModal} badge="9">
            <BsChatSquare size="32px" />
            {console.log(Modal)
            }
          </button>
        </span>
      </div>
    </div>
    <ModalPost isOpen={Modal} onClose={handleCloseModal}/>
    </Fragment>
  );
}

export default PostHome;
