import React from "react";
import logo from "../assets/static/Logo.png";
import fondo from "../assets/static/fondo-login.jpg";
import { Link } from "react-router-dom";
import "../assets/styles/Login.scss";
function Login() {
  const handleLogin = () => {
    fetch()
  };

  return (
    <div className="page-login">
      <figure className="background-login">
        <img src={fondo} alt="" />
      </figure>
      <form className="form-container">
        <div className="form-login">
          <img className="logo-login" src={logo} alt="" />
          <h1>Iniciar Sesion</h1>
          <input className="login-input" type="email" placeholder="Email" />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
          />
          <Link to="/home">
          <button >Iniciar</button>
          </Link>
          <p className="login-registrate">
            Puedes registrate &nbsp;
            <Link to="/register">aqui</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
