import React from "react";
import { FcAddImage } from "react-icons/fc";
function NewPost() {
  return (
    <div className="container-newPost">
      <div className="newPost-input">
        <label className="newPost-container__btn">
          <FcAddImage size="80px" />
          Selecciona Imagen{" "}
        </label>
        <input type="file" accept="image/*" />
      </div>
      <button className="newPost-upload">Subir</button>
    </div>
  );
}

export default NewPost;
