import React from "react";
import { connect } from "react-redux";

import styles from "./navBar.module.css";
import Navigation from "./navigation";
import UserMenu from "./userMenu";
import AuthNav from "./authNav";
import { getIsAuth } from "../redux/auth/auth-selectors";
import { UserInfo } from "../components/UserInfo/UserInfo";
import ContainerGrid from "../components/ContainerGrid/ContainerGrid";
import GridElementLeft from "../components/ContainerGrid/GridElementLeft";
import GridElementRight from "../components/ContainerGrid/GridElementRight";
import { useMediaQuery } from "../shared/hooks/mediaRuleHook";

const NavBar = ({ isAuthenticated }) => {
  const isPageWideLaptop = useMediaQuery("(min-width: 1280px)");
  const isPageWideMobile = useMediaQuery("(max-width: 767px)");
  const renderGrid = isAuthenticated && isPageWideLaptop;

  return (
    <>
      {renderGrid ? (
        <ContainerGrid>
          <GridElementLeft>
            <div className={styles.headerNavigation}>
              <Navigation auth={isAuthenticated} />
              <UserMenu />
            </div>
          </GridElementLeft>
          <GridElementRight>
            <div className={styles.headerUserInfo}>
              <UserInfo />
            </div>
          </GridElementRight>
        </ContainerGrid>
      ) : (
        <>
          <div className={styles.headerContainer}>
            <div className={styles.headerSection}>
              <Navigation auth={isAuthenticated} />
              {isAuthenticated ? <UserMenu /> : <AuthNav />}
            </div>
          </div>
          {isAuthenticated && isPageWideMobile && (
            <div>
              <UserInfo />
            </div>
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuth(state),
});

export default connect(mapStateToProps)(NavBar);
