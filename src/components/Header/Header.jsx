import React from "react";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["logo-w"]}>
        <img
          src="https://i2.wp.com/banjos.com.au/wp-content/uploads/2016/05/instagram-Logo-PNG-Transparent-Background-download.png"
          alt="logo"
          className={classes.logo}
        />
      </div>
    </header>
  );
};

export default Header;
