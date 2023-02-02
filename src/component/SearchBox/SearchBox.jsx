import React, { useEffect, useRef, useState } from 'react';
import { DROPDOWN_ICON } from 'styles/CommonIcon';
import style from 'component/SearchBox/searchBox.module.css';

const SearchBox = () => {
  const categoryList = {
    all: '전체',
    title: '상품명',
    brand: '브랜드',
    description: '상품내용',
  };
  const urlParams = new URLSearchParams(window.location.search);
  const [currentOptionKey, setCurrentOptionKey] = useState(urlParams.get('option') || 'all');
  const [keyword, setKeyword] = useState(urlParams.get('keyword') || '');
  const [limit, setLimit] = useState(urlParams.get('limit') || '10');
  const [isClicked, setIsClicked] = useState(false);
  console.log(urlParams.get('limit'));

  const inputRef = useRef();

  useEffect(() => {
    window.history.pushState('', null, `?keyword=${keyword}&option=${currentOptionKey}&limit=${limit}`);
  }, [currentOptionKey, keyword, limit]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    inputRef.current.value = urlParams.get('keyword');
  }, []);

  const onClickHandler = async () => {
    await setKeyword(inputRef.current.value);
    window.location.reload();
  };
  return (
    <header className={style.wrapper}>
      <h1 className='sr-only'>상품 검색창</h1>
      <div className={style.tit_wrapper}>
        <strong className={style.sub_tit}>상품검색</strong>
      </div>
      <span className={style.bar} />
      <div className={style.search_wrapper}>
        <strong className={style.sub_tit}>검색</strong>
        <div className={style.dropdown_wrapper}>
          {categoryList[currentOptionKey]}
          <button className={style.dropdown_btn} type='button' onClick={() => setIsClicked(!isClicked)}>
            <img src={DROPDOWN_ICON} alt='드롭다운 아이콘' />
          </button>
          <ul className={isClicked ? `${style.select_box}` : `${style.select_box} sr-only`}>
            <li>
              <button
                onClick={() => {
                  setIsClicked(!isClicked);
                  setCurrentOptionKey('all');
                }}
              >
                전체
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsClicked(!isClicked);
                  setCurrentOptionKey('title');
                }}
              >
                상품명
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsClicked(!isClicked);
                  setCurrentOptionKey('brand');
                }}
              >
                브랜드
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsClicked(!isClicked);
                  setCurrentOptionKey('description');
                }}
              >
                상품내용
              </button>
            </li>
          </ul>
        </div>
        <input ref={inputRef} type='text' />
        <button
          className={style.search_button}
          onClick={() => {
            onClickHandler();
          }}
          type='submit'
        >
          조회
        </button>
      </div>
    </header>
  );
};

export default SearchBox;
