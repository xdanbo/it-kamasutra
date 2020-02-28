import React from "react";
import classes from "./Users.module.scss";
import userPhoto from "../../assets/images/user.jpeg";
import {NavLink} from "react-router-dom";

const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <li>
      <div>
        <div>
          <NavLink
            to={`/profile/${user.id}`}
            className={classes["avatar-wrapper"]}
          >
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt=""
              className={classes["avatar-i"]}
            />
          </NavLink>
          <div>
            {user.followed ? (
              <button
                disabled={followingInProgress.some(id => id === user.id)}
                onClick={() => unfollow(user.id)}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some(id => id === user.id)}
                onClick={() => follow(user.id)}
              >
                Follow
              </button>
            )}
          </div>
        </div>
        <div>
          <div>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </div>
          <div>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default User;
