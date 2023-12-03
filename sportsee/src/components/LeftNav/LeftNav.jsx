import React from "react";
import { NavLink } from "react-router-dom";

import iconMeditation from "../../assets/iconMeditation.svg";
import iconNage from "../../assets/iconNage.svg";
import iconVelo from "../../assets/iconVelo.svg";
import iconHaltere from "../../assets/iconHaltere.svg";

import "../LeftNav/LeftNav.css";

export default function LeftNav() {
  return (
    <aside className="leftnav_container">
      <nav className="leftnav_navigation">
        <NavLink className="link_icon" to="/">
          <img src={iconMeditation} alt="icone meditation" />
        </NavLink>
        <NavLink className="link_icon" to="#">
          <img src={iconNage} alt="icone meditation" />
        </NavLink>
        <NavLink className="link_icon" to="#">
          <img src={iconVelo} alt="icone meditation" />
        </NavLink>
        <NavLink className="link_icon" to="#">
          <img src={iconHaltere} alt="icone meditation" />
        </NavLink>
      </nav>
      <p className="leftnav_copiryght">Copiryght, SportSee 2020</p>
    </aside>
  );
}