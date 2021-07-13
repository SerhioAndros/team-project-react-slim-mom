import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuthUserName } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operation";

import css from "./UserInfo.module.css";
import Line from "../../images/line.png";

export function UserInfo() {
  const dispatch = useDispatch();
  const name = useSelector(getAuthUserName);
  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);
  return (
    <div className={css.userContainer}>
      <div className={css.userInfo}>
        <span className={css.name}>{name}</span>
        <img className={css.Line} src={Line} alt="line" width="2" height="32" />
        <button type="button" className={css.logout} onClick={onLogOut}>
          Выйти
        </button>
      </div>
    </div>
  );
}
