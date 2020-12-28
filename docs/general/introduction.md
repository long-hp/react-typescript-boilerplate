[2]: ./commands.md

<!-- contend -->

# Hướng dẫn sử dụng react-typescript-boilerplate

React-typescript-boilerplate dược xây dựng và phát triển bởi [Wiloke](https://github.com/wiloke1). Tài liệu này nhằm cung cấp
cho bạn một chút về cách kiến trúc của react-typescript-boilerplate cũng như cách sử dụng [wiloke-react-core](https://www.npmjs.com/package/wiloke-react-core) tích hợp bên trong.

Hệ sinh thái JavaScript phát triển với tốc độ đáng kinh ngạc: Việc bắt kịp công nghệ khiến các lập trình viên mới cảm thấy quá tải. Vì vậy thay vì bạn luôn phải cập nhật mọi công cụ, tính năng và kĩ thuật mới đây là bản soạn thảo sẵn sàng cho Production và được tối ưu hóa cho các trình duyệt, không dành cho người mới bắt đầu. Nó bao gồm các công cụ giúp bạn quản lý performance, styling, mọi thứ bạn cần để xây dựng một ứng dụng thực sự.

## Tech Stack

Dưới đây là danh sách những thứ được sắp xếp mà bạn ít nhất phải quen thuộc trước khi bắt đầu dự án tuyệt vời của mình. Tuy nhiên, cách tốt nhất để xem danh sách đầy đủ các dependencies là kiểm tra `package.json`.

### Core

- [React](https://facebook.github.io/react/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://github.com/ReactTraining/react-router)
- [Redux](http://redux.js.org/)
- [Redux Saga](https://redux-saga.github.io/redux-saga/)
- [Reselect](https://github.com/reactjs/reselect)
- [Ramda](https://ramdajs.com/)
- [Wiloke Style](#1)
- [Tachyons](#https://tachyons.io/)

### Linting

- [ESLint](http://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://www.npmjs.com/package/husky)

### Doc

- [Storybook](https://storybook.js.org/)

## Project Structure

### `src/`

Bạn sẽ viết ứng dụng của mình trong thư mục src. Đây là thư mục bạn sẽ dành nhiều thời gian nhất

- `@types:` Chứa các type overrides thư viện
- `components:` Chứa các thành phần chia sẻ dùng đi dùng lại ở mọi nơi trong dự án
- `containers:` Một loại components giúp ta kết nối với store để xử lý dữ liệu, layout page và kết nối các components
- `hook:` Các file react hooks ( ví dụ: useToggle.ts, useMount.ts... )
- `models:` Chứa type dữ liệu trên server trả về
- `routes:` Nơi config react-router-dom
- `store:` Nơi chứa config redux store và general store
- `stories:` List các components đã làm nên storybook
- `styles:` Chứa các scss global cho toàn bộ dự án
- `types:` Type global của dự án
- `utils:` Chứa constanst và các hàm tái sử dụng cho dự án

<!-- end of content -->

[Next][2]
