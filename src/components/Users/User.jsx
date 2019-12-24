import React from "react";
import classes from "./Users.module.scss";
import userPhoto from "../../assets/images/user.jpeg";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator.jsx";

const Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  unfollow,
  follow,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map(u => (
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
                    disabled={followingInProgress.some(id => id === u.id)}
                    onClick={() => unfollow(u.id)}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.some(id => id === u.id)}
                    onClick={() => follow(u.id)}
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
