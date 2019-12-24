import React from "react";
import classes from "./Users.module.scss";

const Paginator = props => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
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
  );
};

export default Paginator;