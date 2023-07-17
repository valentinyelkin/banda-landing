import React, { useState } from 'react';
import styles from './pagination.module.scss';

interface PaginationPage {
  currentPage: number;
}

const Pagination: React.FC<PaginationPage> = ({ currentPage }) => {
  const [totalPageCount] = useState(7);

  const rangePages = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = (): (number | string)[] => {
    let arrayPages: Array<number | string> = [];
    if (currentPage) {
      arrayPages = rangePages(currentPage, totalPageCount);
    }
    const rightSiblingIndex = Math.min(currentPage, totalPageCount);
    const shouldShowRightDots = rightSiblingIndex <= 3;
    if (shouldShowRightDots) {
      const leftItemCount = rightSiblingIndex + 2;
      const leftRange = rangePages(currentPage, leftItemCount);

      if (leftRange) {
        arrayPages = [...leftRange, '...', totalPageCount];
      }
    }
    return arrayPages;
  };

  const pagesArr = paginationRange();

  return (
    <div className={styles.wrapperPagination}>
      {pagesArr.map((page) => (
        <span
          key={page}
          className={`${styles.numberPage} ${
            currentPage === page && styles.selectedPage
          }`}
        >
          {page === '...' ? `${page}` : `0${page}`}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
