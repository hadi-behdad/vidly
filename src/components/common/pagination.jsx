import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
  const {
    pageSize,
    itemsCount,
    currentPage,
    onPageChange,
    paginationBaseUrl,
  } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  if (pagesCount === 1) return null;
  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pages.map((page, index) => (
          <li
            onClick={() => onPageChange(page)}
            key={index}
            className={"page-item" + (currentPage === page ? " active" : "")}
          >
            <Link className="page-link" to={paginationBaseUrl}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
