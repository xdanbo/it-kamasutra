import React from "react";

import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes["nav-list"]}>
        <li className={classes["nav-l-item"]}>
          <NavLink
            to="/profile"
            className={classes["nav-link"]}
            activeClassName={classes["active-mod"]}
          >
            Profile
          </NavLink>
        </li>
        <li className={classes["nav-l-item"]}>
          <NavLink
            to="/dialogs"
            className={classes["nav-link"]}
            activeClassName={classes["active-mod"]}
          >
            Messages
          </NavLink>
        </li>
        <li className={classes["nav-l-item"]}>
          <NavLink
            to="/users"
            className={classes["nav-link"]}
            activeClassName={classes["active-mod"]}
          >
            Users
          </NavLink>
        </li>
        {/* <li className={classes.nav_l_item}>
          <NavLink href="#3" className={classes.nav_link}>
            News
          </NavLink>
        </li>
        <li className={classes.nav_l_item}>
          <NavLink href="#3" className={classes.nav_link}>
            Music
          </NavLink>
        </li>
        <li className={classes.nav_l_item}>
          <NavLink href="#3" className={classes.nav_link}>
            Settings
          </NavLink>
        </li>*/}
      </ul>
    </nav>
  );
};

export default Navbar;
