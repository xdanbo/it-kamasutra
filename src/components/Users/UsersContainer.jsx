import React from "react";
import Users from "./Users";
import { connect } from "react-redux";

const UsersContainer = props => {
  return <div>Users will be here</div>;
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
