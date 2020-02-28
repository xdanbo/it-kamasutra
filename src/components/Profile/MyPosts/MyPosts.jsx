import React from "react";

import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required
} from "../../../utils/validators/validators.js";
import { Textarea } from "../../common/formControls/formControls.js";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newPostText"}
          placeholder={"Enter your message"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "profileAddPostForm" })(AddPostForm);

const MyPosts = React.memo(props => {
  const postsElements = props.posts.map(({ id, message, likesCount }) => (
    <Post message={message} likesCount={likesCount} key={id} />
  ));

  const onAddPost = values => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes["posts-wrapper"]}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={onAddPost} />
      <div className={classes.posts}>
        <ul className={classes.post_list}>{postsElements}</ul>
      </div>
    </div>
  );
});

export default MyPosts;
