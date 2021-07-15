import React from "react";

import css from "./ContainerGrid.module.css";

const ContainerGrid = ({ children }) => {
  return <div className={css.containerGr}>{children}</div>;
};

export default ContainerGrid;
