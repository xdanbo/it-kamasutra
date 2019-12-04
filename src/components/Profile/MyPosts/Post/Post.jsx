import React from "react";

import classes from "./Post.module.scss";

const Post = props => {
  const { message, likesCount } = props;
  return (
    <li className={classes.post_l_item}>
      <div className={classes.post_block}>
        {message} - {likesCount} like(s)
      </div>
    </li>
  );
};

export default Post;
