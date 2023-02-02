import SearchBox from "component/SearchBox/SearchBox";
import SearchLists from "component/SearchLists/SearchLists";
import React from "react";
import styles from "pages/SearchPage/searchPage.module.css";
const SearchPage = () => {
  return (
    <>
      <SearchBox />
      <main className={styles.main_wrapper}>
        <h2 className="sr-only">상품리스트</h2>
        <div className={styles.tit_wrapper}>
          <p>{`검색된 데이터 : ${"100"}건`}</p>
        </div>
        <SearchLists />
      </main>
    </>
  );
};

export default SearchPage;
