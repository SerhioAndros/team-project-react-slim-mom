import React from "react";
import { NavLink } from "react-router-dom";
import MainMenu from "./MainMenu/MainMenu";
import { NavState } from "./NavState/NavState";
import { UserInfo } from "../UserInfo/UserInfo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_footer}>
          <div className={styles.boxTablet}>
            {/* <div className={styles.userInfoTablet}>
              <UserInfo />
            </div> */}
            <NavState>
              <MainMenu />
            </NavState>
            <div className={styles.burgerMenu}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
