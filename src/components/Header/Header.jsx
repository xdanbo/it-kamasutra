import React from "react";

import classes from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={classes.header}>
      <div className={classes["logo-w"]}>
        <img
          src="https://i2.wp.com/banjos.com.au/wp-content/uploads/2016/05/instagram-Logo-PNG-Transparent-Background-download.png"
          alt="logo"
          className={classes.logo}
        />
      </div>
      <div className={classes["login-block"]}>
        {props.isAuth ? (
          <div>
            {props.login} -- <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
