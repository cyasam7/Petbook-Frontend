import React, { useState } from "react";
import "../assets/styles/Register.scss";
import fondo from "../assets/static/fondo-login.jpg";
import logo from "../assets/static/Logo.png";
import { MdError } from "react-icons/md";
function Register(props) {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState(false);

  const handleonChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmite = (e) => {
    e.preventDefault();
    if (
      form.name === "" ||
      form.lastName === "" ||
      form.email === "" ||
      form.password === "" ||
      form.confirm === ""
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    delete form.confirm;
  };
  let componentError;
  if (error) {
    componentError = (
      <div className="register-error">
        <MdError />
        <p>Colocar bien los datos</p>
      </div>
    );
  }
  return (
    <div className="register-container">
      <figure className="register-background">
        <img src={fondo} />
      </figure>
      <div className="register-background__color">
        <form className="form-register">
          <img src={logo} alt="Logo" />
          <h1>Registrate</h1>
          <input
            onChange={handleonChange}
            value={form.name}
            name="name"
            type="text"
            placeholder="Nombre"
          />
          <input
            onChange={handleonChange}
            value={form.lastName}
            name="lastName"
            type="text"
            placeholder="Apellido"
          />
          <input
            onChange={handleonChange}
            value={form.email}
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={handleonChange}
            value={form.password}
            name="password"
            type="password"
            placeholder="Password"
          />
          <input
            onChange={handleonChange}
            value={form.confirm}
            name="confirm"
            type="password"
            placeholder="Confirmar"
          />
          <button onClick={handleSubmite}>Registrar</button>
          {componentError}
        </form>
      </div>
    </div>
  );
}

export default (Register);
