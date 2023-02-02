# blockOdyssey_assignment
BlockOdyssey assignment 이광렬

## Overview

### How To Start
1. .env 파일을 생성하여, ```REACT_APP_API_ROOT="https://dummyjson.com/products?limit=100"```를 입력하시고 저장해 주세요.
2. ```npm i```
3. ```npm start```
### Available_Libraries
- React v17/ v18
- react-query v4
- redux-toolkit

### Tasks 
- List
  - [x] It should be a search result list.
  - [x] After page refresh, the search result should persist.
  - [x] The column is in order of [상품번호, 상품명, 브랜드, 상품내용, 가격, 평점, 재고].
  - [x] Display the total amount of data at the top of the list.
  - [x] The maximum length of [상품내용] is 40 characters. If it exceeds the maximum length, you should display the rest of the content using ellipsis ....
- Search
  - [x] Search conditions are the following : [전체, 상품명, 브랜드, 상품내용].
  - [x] Both search condition and keyword must be persisted after the refresh.
- Pagination
  - [x] Implement rows per page using a select box. The select box should display [10, 20, 50] options.
  - [x] Both rows per page and page number must be persisted after the refresh.

### Screenshot
![블록오디세이_시연_AdobeExpress](https://user-images.githubusercontent.com/57481378/216270909-d57436ef-b00b-45a1-b243-aef81bcac173.gif)


## My process

### Built with
- javascript
- react v18
- react query v4
