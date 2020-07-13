import React from "react";
import me from "../assets/static/me.jpg";
const NewComentario = () => {
  return (
    <div className="comentarioNewPost">
      <div className="Comentario_header">
        <figure>
          <img src={me} alt="" />
        </figure>
        <p>
          <strong>Moises Jota Serrano</strong>
        </p>
      </div>
      <p className="cometario-comentario">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nisi
        vero qui minus, voluptatum incidunt explicabo ipsum, impedit, illo enim
        quidem. Reprehenderit, fuga autem! Atque incidunt tempore soluta quia
        molestiae?
      </p>
    </div>
  );
};
export default NewComentario;
