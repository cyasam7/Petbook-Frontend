import React from "react";
import "../assets/styles/EditProfile.scss";

const EditProfile = () => {
  return (
    <div className="container-EditProfile">
      <h1>Campos a llenar</h1>
      <div className="form-editProfile">
        <label htmlFor="">Nombre:</label>
        <input placeholder="Nombre" type="text" />
        <label htmlFor="">Apellido:</label>
        <input placeholder="Apellido" type="text" />
        <label htmlFor="">Correo:</label>
        <input placeholder="Email" type="text" />
        <label htmlFor="">Password:</label>
        <input placeholder="Password" type="password" />
        <label htmlFor="">Confirmar:</label>
        <input placeholder="Confirmar password" type="password" />
        <label htmlFor="">Foto de perfil:</label>
        <input type="file" />
        <label htmlFor="">Descripcion:</label>
        <textarea placeholder="Decripcion que aparecera en tu perfil..." cols="30" rows="10"></textarea>
        <button>Guardar</button>
      </div>
    </div>
  );
};
export default EditProfile;
