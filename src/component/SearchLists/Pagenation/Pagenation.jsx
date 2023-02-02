import React from 'react';

import styles from 'component/SearchLists/Pagenation/pagenation.module.css';
import { FIRST_PAGE_ON_ICON, LAST_PAGE_ON_ICON, NEXT_ON_ICON, PREV_ON_ICON } from 'styles/CommonIcon';
const Pagenation = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  return (
    <nav className={styles.nav_wrapper}>
      <button onClick={() => setPage(1)} disabled={page === 1} className={styles.page_btn}>
        <img src={FIRST_PAGE_ON_ICON} alt='' />
      </button>
      <button onClick={() => setPage(page - 1)} disabled={page === 1} className={styles.page_btn}>
        <img src={PREV_ON_ICON} alt='' />
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            className={styles.page_btn}
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </button>
        ))}
      <button onClick={() => setPage(page + 1)} disabled={page === numPages} className={styles.page_btn}>
        <img src={NEXT_ON_ICON} alt='' />
      </button>
      <button onClick={() => setPage(numPages)} disabled={page === numPages} className={styles.page_btn}>
        <img src={LAST_PAGE_ON_ICON} alt='' />
      </button>
    </nav>
  );
};

export default Pagenation;
