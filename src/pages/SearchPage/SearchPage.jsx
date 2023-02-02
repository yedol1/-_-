import SearchBox from 'component/SearchBox/SearchBox';
import SearchLists from 'component/SearchLists/SearchLists';
import React, { useState } from 'react';
import styles from 'pages/SearchPage/searchPage.module.css';
import { useQuery } from 'react-query';

const getData = async () => {
  return await fetch(process.env.REACT_APP_API_ROOT).then((response) => response.json());
};
const SearchPage = () => {
  const { isLoading, data } = useQuery(['product_list'], getData);
  return (
    <>
      <SearchBox />
      <main className={styles.main_wrapper}>
        <h2 className='sr-only'>상품리스트</h2>
        <SearchLists data={data} />
      </main>
    </>
  );
};

export default SearchPage;
