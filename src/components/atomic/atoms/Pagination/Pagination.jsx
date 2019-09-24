import React, { useState, useEffect } from "react";
import cn from "classnames";
import "./styles.scss";

const Pagination = ({ numberOfPages, changePaginationPage, loading, currentPage }) => {
  const pageNumbers = [];
  const [selectedButton, setSelectedButton] = useState(currentPage);

  useEffect(() => {
    setSelectedButton(currentPage);
  }, [currentPage]);

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  if (loading) {
    return null;
  }

  return (
    <nav className='paginationWrapper'>
      <h3 className='header'>change page</h3>
      <ul className='pageList'>
        {pageNumbers.map((number, idx) => (
          <li key={number} className='items'>
            <button
              className={cn("listButton", {
                isSelected: idx + 1 === selectedButton
              })}
              onClick={() => {
                changePaginationPage(number);
                setSelectedButton(idx + 1);
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
