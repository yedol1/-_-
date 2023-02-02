import React from "react";

import styles from "component/SearchLists/List/list.module.css";

const List = () => {
  const description = "An apple mobile which is nothing like apple";
  return (
    <>
      <tr className={styles.tr_style} key={1}>
        <td>{"1"}</td>
        <td>{"iPhone 9"}</td>
        <td>{"Apple"}</td>
        <td>{description.length <= 40 ? description : description.slice(0, 40) + "..."}</td>
        <td>{`$ ${549}`}</td>
        <td>{4.69}</td>
        <td>{94}</td>
      </tr>
    </>
  );
};

export default List;
