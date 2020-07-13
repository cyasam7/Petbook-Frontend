import React from "react";
import Modal from "./Modal";
import me from '../assets/static/me.jpg'
import "../assets/styles/ModalPost.scss";
import NewComentario from "./NewComentario";
function ModalPost({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="Modal-Post__container">
          
        <figure className="Modal-Post__image">
          <img src={me} alt="" />
        </figure>
        <div className="Modal-Post__comentarios">

          <div className="Modal-Post__header">
            <span className="Post-image">
              <img src={me} alt="Foto" />
            </span>
            <span className="Post-name">Alexander Serrano</span>
          </div>

          <div className="carousel-newPost">
            <NewComentario/>
            <NewComentario/>
            <NewComentario/>
          </div>
          <div className="comentarios-input">
            <input placeholder="En que estas pensando" className="cometarios-input__text" type="text" name="" id="" />
            <button className="cometarios-input__button">Enviar</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalPost;
