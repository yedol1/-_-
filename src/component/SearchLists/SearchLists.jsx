import React, { useEffect, useState } from 'react';
import styles from 'component/SearchLists/searchLists.module.css';

import List from './List/List';
import Pagenation from './Pagenation/Pagenation';

const SearchLists = ({ data }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const [limit, setLimit] = useState(urlParams.get('limit') || '10');
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [filterData, setFilterData] = useState([]);

  const filter = (data) => {
    if (data) {
      switch (urlParams.get('option')) {
        case 'all':
          return data.products.filter((list) => {
            if (
              list.title.includes(urlParams.get('keyword')) ||
              list.brand.includes(urlParams.get('keyword')) ||
              list.description.includes(urlParams.get('keyword'))
            ) {
              return list;
            }
          });
        case 'title':
          return data.products.filter((list) => {
            return list.title.includes(urlParams.get('keyword'));
          });
        case 'brand':
          return data.products.filter((list) => {
            return list.brand.includes(urlParams.get('keyword'));
          });
        case 'description':
          return data.products.filter((list) => {
            return list.description.includes(urlParams.get('keyword'));
          });
        default:
      }
    }
  };
  useEffect(() => {
    const isData = filter(data);
    setFilterData(isData);
  }, [data]);

  console.log(filterData);
  const onChangeHandler = (e) => {
    setLimit(e.target.value);
    window.open(
      window.location.pathname +
        '?keyword=' +
        urlParams.get('keyword') +
        '&option=' +
        urlParams.get('option') +
        '&limit=' +
        e.target.value,
      '_self',
    );
  };

  return (
    filterData && (
      <>
        <div className={styles.tit_wrapper}>
          <p>{`검색된 데이터 : ${filterData.length}건`}</p>
        </div>
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
              {filterData
                .slice(offset, offset + Number(limit))
                .map(({ id, title, brand, description, price, rating, stock }, index) => (
                  <List
                    id={id}
                    title={title}
                    brand={brand}
                    description={description}
                    price={price}
                    rating={rating}
                    stock={stock}
                    key={title}
                  />
                ))}
            </tbody>
          </table>
          <div className={styles.pagination_wrapper}>
            <div>
              페이지 당 행:
              {'    '}
              <select name='페이지 당 행 갯수 선택' defaultValue={limit} onChange={onChangeHandler}>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='50'>50</option>
              </select>
            </div>
            <Pagenation total={filterData.length} limit={limit} page={page} setPage={setPage} />
          </div>
        </div>
      </>
    )
  );
};

export default SearchLists;
