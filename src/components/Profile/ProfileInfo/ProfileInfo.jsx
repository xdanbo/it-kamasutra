import React, { Fragment } from "react";
import classes from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <Fragment>
      <div className={classes["content-img-w"]}>
        <img
          src="http://www.datsuncarsandparts.com/data/archive/img/3903618337.jpeg"
          alt="nature"
          className={classes["content-img"]}
        />
      </div>
      <div className={classes["description-block"]}>ava + desc</div>
    </Fragment>
  );
};

export default ProfileInfo;
