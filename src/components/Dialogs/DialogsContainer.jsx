import React from "react";

import Dialogs from "./Dialogs";
import { compose } from "redux";

import { sendMessageCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";

const mapStateToProps = ({ messagesPage }) => {
  return {
    messagesPage
  };
};

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: newMessageBody => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
