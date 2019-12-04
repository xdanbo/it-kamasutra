import React from "react";
import MyPosts from "./MyPosts";

import { connect } from "react-redux";

import {
  updateNewPostTextCreator,
  addPostCreator
} from "../../../redux/profile-reducer";

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewPostText: text => {
      let action = updateNewPostTextCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostCreator());
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
