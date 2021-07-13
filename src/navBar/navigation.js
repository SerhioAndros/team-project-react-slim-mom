import React from "react";
import { NavLink } from "react-router-dom";

const logoImg = "../images/logo.png";

const Navigation = () => (
  <NavLink exact to="/">
    <img src={logoImg} alt="Website logo" width="50" />
    <span>Slim</span>
    <span>Mom</span>
  </NavLink>
);

export default Navigation;
