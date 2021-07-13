import React, { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from "../../redux/auth";
import css from "./UserInfo.module.css";
import Line from "../../images/line.png";

export default function UserInfo() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  <div className={css.userContainer}>
    <div className={css.userInfo}>
      <span className={css.name}>{name}</span>
      <img
        className={css.Line}
        src={Line}
        alt="line"
        width="2"
        height="32"
      />
      <button type="button" className={css.logout} onClick={onLogOut}>
        Выйти
      </button>
    </div>
  </div>
};

