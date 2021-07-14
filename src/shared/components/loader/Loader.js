import React from "react";
import Loader from "react-loader-spinner";

export const AppLoader = () => {
  return (
    <div className="wrapper">
      <Loader
        type="Puff"
        color="#FC842D"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};
