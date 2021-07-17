import React from "react";
import { NavLink } from "react-router-dom";
import { UserInfo } from "../components/UserInfo/UserInfo";
import styles from "./userMenu.module.css";
import { useMediaQuery } from "../shared/hooks/mediaRuleHook";

import Footer from "../components/footer/Footer";

const activeLink = {
  color: "#212121",
};

const UserMenu = () => {
  const isPageWideLaptop = useMediaQuery("(min-width: 1280px)");
  const isPageWideTablet = useMediaQuery("(max-width: 1279px)");

  return (
    <div className={styles.userMenuWrapper}>
      {isPageWideLaptop && (
        <div className={styles.navWrapper}>
          <NavLink
            to="/diary"
            exact
            className={styles.link}
            activeStyle={activeLink}
          >
            Дневник
          </NavLink>
          <NavLink
            to="/calculator"
            exact
            className={styles.link}
            activeStyle={activeLink}
          >
            Калькулятор
          </NavLink>
        </div>
      )}
      {isPageWideTablet && <Footer />}
      {/* <UserInfo /> */}
    </div>
  );
};

export default UserMenu;
