import React from "react";
import logo from "../assets/static/me.jpg";
import { Link } from "react-router-dom";
import "../assets/styles/Header.scss";
import { MdNotifications, MdCamera, MdPerson } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { GiExitDoor } from "react-icons/gi";

function Header({ children }) {
  return (
    <div>
      <header className="header">
        <div className="container-align">
          <Link to="/home">
            <AiFillHome color="white" size="1.5em" />
          </Link>
          <ul className="header-menu">
            <li className="header-menu__item">
              <Link to="/">
                <MdNotifications color="white" size="1.5em" />
              </Link>
            </li>
            <li className="header-menu__item">
              <Link to="/profile">
                <MdPerson color="white" size="1.5em" />
              </Link>
            </li>
            <li className="header-menu__item">
              <Link to="">
                <GiExitDoor color="white" size="1.5em" />
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="container-align">{children}</div>
    </div>
  );
}

export default Header;
