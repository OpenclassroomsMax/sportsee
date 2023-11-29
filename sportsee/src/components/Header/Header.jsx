import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";

import "../Header/Header.css";

export default function Header() {
  return (
    <header className="header_container">
      <img className="logo_sportsee" src={logo} alt="logo Sportsee" />
      <nav className="header_navigation">
        <NavLink className="link_nav" to="/">
          Accueil
        </NavLink>
        <NavLink className="link_nav" to="#">
          Profil
        </NavLink>
        <NavLink className="link_nav" to="#">
          Réglages
        </NavLink>
        <NavLink className="link_nav" to="#">
          Communauté
        </NavLink>
      </nav>
    </header>
  );
}
