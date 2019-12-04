import React from "react";

import classes from "../Dialogs.module.scss";

const Message = props => {
  const { message } = props;
  return (
    <li className={classes["messages-l-item"]}>
      <div className={classes["messages-l-block"]}>{message}</div>
    </li>
  );
};

export default Message;
