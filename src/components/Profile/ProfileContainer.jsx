import React, { Component } from "react";
import * as axios from "axios";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { setUserProfile } from "../../redux/profile-reducer.js";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

const WithUriDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUriDataContainerComponent
);
