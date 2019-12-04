import React from "react";

import classes from "../Dialogs.module.scss";

import { NavLink } from "react-router-dom";

const DialogItem = props => {
  const { name, id } = props;
  return (
    <li className={classes["dialogs-l-item"]}>
      <NavLink to={`/dialogs/${id}`} className={classes["dialogs-l-link"]}>
        {name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
