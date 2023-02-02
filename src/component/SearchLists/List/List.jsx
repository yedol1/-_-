import React from 'react';

import styles from 'component/SearchLists/List/list.module.css';

const List = ({ id, title, brand, description, price, rating, stock }) => {
  return (
    <>
      <tr className={styles.tr_style} key={1}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{brand}</td>
        <td>{description.length <= 40 ? description : description.slice(0, 40) + '...'}</td>
        <td>{`$ ${price}`}</td>
        <td>{rating}</td>
        <td>{stock}</td>
      </tr>
    </>
  );
};

export default List;
