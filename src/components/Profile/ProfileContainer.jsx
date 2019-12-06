import React, { Component } from "react";
import * as axios from "axios";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";

import { setUserProfile } from "../../redux/profile-reducer.js";

class ProfileContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => ({
  userProfile: state.profilePage.userProfile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
