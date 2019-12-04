import React from "react";
import classes from "./Users.module.scss";
import * as axios from "axios";
import userPhoto from "../../../src/assets/images/user.jpeg";

const Users = props => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => props.setUsers(response.data.items));
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map(u => (
        <li key={u.id}>
          <div>
            <div>
              <div className={classes["avatar-wrapper"]}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                  className={classes["avatar-i"]}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Users;
