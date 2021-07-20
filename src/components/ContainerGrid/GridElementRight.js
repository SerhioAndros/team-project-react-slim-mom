import React from "react";

import css from "./GridElementRight.module.css";

const GridElementRight = ({ children }) => {
  return <div className={css.elementRight}>{children}</div>;
};

export default GridElementRight;
