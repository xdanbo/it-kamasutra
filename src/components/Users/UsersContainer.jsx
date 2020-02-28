import React, { Component } from "react";
import { connect } from "react-redux";
import {
  requestUsers,
  follow,
  toggleFollowingProgress,
  unfollow
} from "../../redux/users-reducer";
import Users from "./Users.jsx";
import Loader from "../Loader/Loader.jsx";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from "../../redux/users-selectors.js";

class UsersContainer extends Component {
  componentDidMount() {
    const { getUsers, currentPage, pageSize } = this.props;
    getUsers(currentPage, pageSize);
  }

  onPageChanged = pageNumber => {
    const { getUsers, pageSize } = this.props;
    getUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   };
// };

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // follow: userId => {
    //   dispatch(followAC(userId));
    // },
    // unfollow: userId => {
    //   dispatch(unFollowAC(userId));
    // },
    // setUsers: users => {
    //   dispatch(setUsersAC(users));
    // },
    // setCurrentPage: pageNumber => {
    //   dispatch(setCurrentPageAC(pageNumber));
    // },
    // setTotalUsersCount: usersNumber => {
    //   dispatch(setTotalUsersCountAC(usersNumber));
    // },
    // toggleIsFetching: isFetching => {
    //   dispatch(toggleIsFetchingAC(isFetching));
    // }
  };
};

// const AuthRedirectComponent = withAuthRedirect(UsersContainer);

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsers: requestUsers
  })
)(UsersContainer);
