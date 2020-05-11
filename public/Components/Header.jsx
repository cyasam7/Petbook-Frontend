import React from "react";
import logo from "../assets/static/me.jpg";
import { Link } from "react-router-dom";
import "../assets/styles/Header.scss";
function Header({ children }) {
  return (
    <div>
      <header className="header">
        <div className="container-align">
          <Link to="/profile">
            <img className="header-img" src={logo} alt="" />
          </Link>
          <ul className="header-menu">
            <li className="header-menu__item">Notificacion</li>
            <li className="header-menu__item">Salir</li>
          </ul>
        </div>
      </header>
      <div className="container-align">
      {children}
      </div>
    </div>
  );
}

export default Header;
