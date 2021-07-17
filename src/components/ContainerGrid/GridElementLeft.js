import React from "react";

import css from "./GridElementLeft.module.css";

const GridElementLeft = ({ children }) => {
  return <div className={css.elementLeft}>{children}</div>;
};

export default GridElementLeft;
