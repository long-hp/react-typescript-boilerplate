[2]: ./commands.md

<!-- contend -->

# Bước đầu tiên để sử dụng

Dưới đây là danh sách những thứ được sắp xếp mà bạn ít nhất phải quen thuộc trước khi bắt đầu dự án tuyệt vời của mình. Tuy nhiên, cách tốt nhất để xem danh sách đầy đủ các dependencies là kiểm tra `package.json`.

### Core

- [React](https://facebook.github.io/react/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS In JS](../css/css-in-js.md)
- [Wiloke Style](../css/wiloke-styles.md)
- [React Router](https://github.com/ReactTraining/react-router)
- [Redux](http://redux.js.org/)
- [Redux Saga](https://redux-saga.github.io/redux-saga/)
- [Reselect](https://github.com/reactjs/reselect)
- ...

### Quản lý components

- [Storybook](https://storybook.js.org/)

## Project Structure

Chúng ta sẽ viết ứng dụng của mình trong thư mục src. Đây là thư mục ta sẽ dành nhiều thời gian nhất

```bash
src
├── @types // Chứa các ts decralation để overrides thư viện hoặc viết riêng cho thư viện không hỗ trợ typescript
│   ├── react-router-dom.ts
│   └── ...
├── components // Chứa các thành phần chia sẻ dùng đi dùng lại ở mọi nơi trong dự án
│   ├── Avatar
│   │   ├── Avatar.tsx
│   │   ├── AvatarLoading.tsx
│   │   └── index.ts
│   ├── Card
│   │   ├── Card.tsx
│   │   ├── CardLoading.tsx
│   │   ├── Card.module.scss
│   │   └── index.ts
│   └── ...
├── containers // Một loại components giúp ta kết nối với store để xử lý dữ liệu, layout page và kết nối các components
│   ├── AppContent
│   │   ├── AppContent.tsx
│   │   └── index.ts
│   ├── HomePage
│   │   ├── actions
│   │   │   ├── actionProduct.ts
│   │   │   └── actionPost.ts
│   │   ├── reducers
│   │   │   ├── reducerProduct.ts
│   │   │   └── reducerPost.ts
│   │   ├── sagas
│   │   │   ├── watchProduct.ts
│   │   │   └── watchPost.ts
│   │   ├── HomePage.tsx
│   │   └── index.ts
│   └── ...
├── hooks // Các file react hooks global
│   ├── useToggle.ts
│   ├── useMount.ts
│   └── ...
├── models // Chứa type dữ liệu trên server trả về
│   ├── Posts.ts
│   ├── Products.ts
│   └── ...
├── store // Nơi chứa config redux store và general store
│   └── general
│       ├── actions
│       │   └── actionExample.ts
│       ├── reducers
│       │   └── reducerExample.ts
│       └── sagas
│           └── watchExample.ts
│   ├── rootReducers.ts
│   ├── rootSagas.ts
│   └── configureStore.ts
├── stories // List các components đã làm nên storybook
│   ├── 1-Start
│   │   ├── App.stories.tsx
│   │   └── ...
│   ├── 2-UIBase
│   │   ├── Header.stories.tsx
│   │   └── ...
│   └── ...
├── styles // Chứa các global CSSINJS cho toàn bộ dự án
│   ├── base.ts
│   └── ...
├── types // Type cho toàn bộ dự án
│   ├── Endpoint.ts
│   ├── Field.ts
│   └── ...
├── utils // Chứa constants và các hàm tái sử dụng cho dự án
│   ├── constants.ts
│   ├── functions
│   │   ├── ConfigureAxios.ts
│   │   ├── isEmpty.ts
│   │   └── ...
│   └── ...
```

Một số lưu ý ( quy ước chung ) khi làm việc

- actionTodolist.ts ( không nên viết action.todolist.ts) tương tự cho reducers và saga
- Tên file component nên viết theo camel case ( ví dụ: HomePage )
- Các component props quá nhiều nên phân tách ra thành các phần ( ví dụ Post, Post.Header, Post.Body...). Hỏi thêm mọi người nếu chưa rõ
  cách làm.
- interface prop nên nhớ phải export ra ( ví dụ: export interface ProductProps ... )
- Dùng [jsdoc](https://jsdoc.app/) để comment cho các prop trong interface ví dụ:

```tsx
  export interface AvatarProps extends Pick<ViewProps, 'radius' | 'className'> {
    /** Kích thước của avatar */
    size?: number;
    /** Tên user */
    name?: string;
    /** Avatar uri */
    uri?: string;
  }
```

<!-- end of content -->

[Next][2]
