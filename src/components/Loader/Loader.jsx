import React from "react";
import classes from "./Loader.module.scss";

const Loader = () => {
  return <div className={classes["lds-dual-ring"]}></div>;
};

export default Loader;
