import React from "react";
import { DROPDOWN_ICON } from "styles/CommonIcon";
import style from "component/SearchBox/searchBox.module.css";

const SearchBox = () => {
  return (
    <header className={style.wrapper}>
      <h1 className="sr-only">상품 검색창</h1>
      <div className={style.tit_wrapper}>
        <strong className={style.sub_tit}>상품검색</strong>
      </div>
      <span className={style.bar} />
      <div className={style.search_wrapper}>
        <strong className={style.sub_tit}>검색</strong>
        <div className={style.dropdown_wrapper}>
          {"전체"}
          <button className={style.dropdown_btn} type="button">
            <img src={DROPDOWN_ICON} alt="드롭다운 아이콘" />
          </button>
          <ul className={`${style.select_box} sr-only`}>
            <li>
              <button>전체</button>
            </li>
            <li>
              <button>상품명</button>
            </li>
            <li>
              <button>브랜드</button>
            </li>
            <li>
              <button>상품내용</button>
            </li>
          </ul>
        </div>
        <input type="text" />
        <button className={style.search_button} type="submit">
          조회
        </button>
      </div>
    </header>
  );
};

export default SearchBox;
