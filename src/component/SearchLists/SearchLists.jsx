import React from "react";
import styles from "component/SearchLists/searchLists.module.css";

import { FIRST_PAGE_ON_ICON, FIRST_PAGE_OFF_ICON, LAST_PAGE_ON_ICON, LAST_PAGE_OFF_ICON, NEXT_ON_ICON, NEXT_OFF_ICON, PREV_ON_ICON, PREV_OFF_ICON } from "styles/CommonIcon";
import List from "./List/List";
const SearchLists = () => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>상품번호</th>
            <th>상품명</th>
            <th>브랜드</th>
            <th>상품내용</th>
            <th>가격</th>
            <th>평점</th>
            <th>재고</th>
          </tr>
        </thead>
        <tbody>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </tbody>
      </table>
      <div className={styles.pagination_wrapper}>
        <div>
          페이지 당 행:
          {"    "}
          <select name="페이지 당 행 갯수 선택">
            <option value="10개">10</option>
            <option value="20개">20</option>
            <option value="50개">50</option>
          </select>
        </div>
        <nav className={styles.nav_wrapper}>
          <button className={styles.page_btn}>
            <img src={FIRST_PAGE_ON_ICON} alt="" />
          </button>
          <button className={styles.page_btn}>
            <img src={PREV_ON_ICON} alt="" />
          </button>
          <button className={styles.page_btn}>
            <img src={NEXT_ON_ICON} alt="" />
          </button>
          <button className={styles.page_btn}>
            <img src={LAST_PAGE_ON_ICON} alt="" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default SearchLists;
