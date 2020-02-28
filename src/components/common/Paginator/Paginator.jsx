import React from "react";
import classes from "./Paginator.module.scss";

const Paginator = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

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
              currentPage === p
                ? `${classes["page-item"]} ${classes["active-mod"]}`
                : `${classes["page-item"]}`
            }
            onClick={() => {
              onPageChanged(p);
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
