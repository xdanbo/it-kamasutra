import React from "react";

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.scss";

import { NavLink } from "react-router-dom";

const Dialogs = props => {
  const state = props.messagesPage;

  const dialogsElements = state.dialogs.map(({ id, name }) => (
    <DialogItem name={name} key={id} id={id} />
  ));

  const messagesElements = state.messages.map(({ id, message }) => (
    <Message key={id} message={message} />
  ));

  const { newMessageBody } = state;

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = e => {
    const text = e.target.value;
    props.updateNewMessageBody(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes["dialogs-wrapper"]}>
        <ul className={classes["dialogs-list"]}>{dialogsElements}</ul>
      </div>
      <div className={classes["messages-wrapper"]}>
        <ul className={classes["messages-list"]}>{messagesElements}</ul>
        <div>
          <div>
            <textarea
              placeholder="Enter your message"
              value={newMessageBody}
              onChange={onNewMessageChange}
            />
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
