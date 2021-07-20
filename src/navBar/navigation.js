import React from "react";

import { NavLink } from "react-router-dom";
import logoImg from "../images/logo.png";
import styles from "./navigation.module.css";
import { useMediaQuery } from "../shared/hooks/mediaRuleHook";

const Navigation = ({ auth }) => {
  const isPageWideMobile = useMediaQuery("(min-width: 320px)");
  const isPageWideTablet = useMediaQuery("(min-width: 768px)");
  const renderOne = isPageWideMobile && auth;
  const renderTwo = isPageWideTablet && !auth;
  const finalRender = renderOne || renderTwo;
  return (
    <NavLink exact to="/">
      <div className={styles.logoWrapper}>
        <img className={styles.logoImg} src={logoImg} alt="Website logo" />
        {finalRender && <span className={styles.logoText}>Slim</span>}
        {finalRender && <span className={styles.logoTextAccent}>Mom</span>}
      </div>
    </NavLink>
  );
};

export default Navigation;
