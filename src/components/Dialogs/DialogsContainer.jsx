import React from "react";

import Dialogs from "./Dialogs";

import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = ({ messagesPage }) => {
  return {
    messagesPage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: body => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
