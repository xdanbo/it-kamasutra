import React from "react";

import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = props => {
  const postsElements = props.posts.map(({ id, message, likesCount }) => (
    <Post message={message} likesCount={likesCount} key={id} />
  ));

  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes["posts-wrapper"]}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <ul className={classes.post_list}>{postsElements}</ul>
      </div>
    </div>
  );
};

export default MyPosts;
