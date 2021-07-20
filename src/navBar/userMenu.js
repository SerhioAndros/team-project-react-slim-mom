import React from "react";
import { NavLink } from "react-router-dom";
import { UserInfo } from "../components/UserInfo/UserInfo";
import styles from "./userMenu.module.css";
import { useMediaQuery } from "../shared/hooks/mediaRuleHook";

import Footer from "../components/header-burger/Footer";

const activeLink = {
  color: "#212121",
};

const UserMenu = () => {
  const isPageWideLaptop = useMediaQuery("(min-width: 1280px)");
  const isPageWideMaxTablet = useMediaQuery("(max-width: 1279px)");
  const isPageWideMinTablet = useMediaQuery("(min-width: 768px)");
  const tabletScreen = isPageWideMaxTablet && isPageWideMinTablet;
  const isPageWideMobile = useMediaQuery("(max-width: 767px)");

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
      {tabletScreen && (
        <>
          <UserInfo />
          <Footer />
        </>
      )}
      {isPageWideMobile && <Footer />}
    </div>
  );
};

export default UserMenu;
