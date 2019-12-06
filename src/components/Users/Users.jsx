import React from "react";
import classes from "./Users.module.scss";
import userPhoto from "../../assets/images/user.jpeg";
import { NavLink } from "react-router-dom";

const Users = props => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span
              className={
                props.currentPage === p
                  ? `${classes["page-item"]} ${classes["active-mod"]}`
                  : `${classes["page-item"]}`
              }
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map(u => (
        <li key={u.id}>
          <div>
            <div>
              <NavLink
                to={`/profile/${u.id}`}
                className={classes["avatar-wrapper"]}
              >
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                  className={classes["avatar-i"]}
                />
              </NavLink>
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
