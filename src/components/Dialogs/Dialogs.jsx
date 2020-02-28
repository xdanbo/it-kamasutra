import React from "react";

import classes from "./Dialogs.module.scss";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../common/formControls/formControls.js";
import {
  maxLengthCreator,
  required
} from "../../utils/validators/validators.js";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength50]}
        name={"newMessageBody"}
        placeholder="Enter your message"
      />
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const Dialogs = props => {
  const state = props.messagesPage;

  const dialogsElements = state.dialogs.map(({ id, name }) => (
    <DialogItem name={name} key={id} id={id} />
  ));

  const messagesElements = state.messages.map(({ id, message }) => (
    <Message key={id} message={message} />
  ));

  const addNewMessage = values => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes["dialogs-wrapper"]}>
        <ul className={classes["dialogs-list"]}>{dialogsElements}</ul>
      </div>
      <div className={classes["messages-wrapper"]}>
        <ul className={classes["messages-list"]}>{messagesElements}</ul>
        <div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
