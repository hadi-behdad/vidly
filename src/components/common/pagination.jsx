import React from "react";
import { PropTypes } from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
  const { pageSize, itemsCount, currentPage, onPageChange } = props;
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
            <a className="page-link">{page}</a>
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
