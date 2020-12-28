# Documentation

## Table of Contents

- General

  - [Introduction](docs/general/introduction.md)
  - [CLI Commands](docs/general/commands.md)
  - [Tool Configuration](docs/general/files.md)
  - [Theme Provider](docs/general/customize-theme.md)

- Styling (CSS)

  - [Wiloke Styles](docs/css/wiloke-styles.md)
  - [Tachyons](docs/css/tachyons.md)
  - [CSS Modules](docs/css/css-modules.md)
  - [SCSS](docs/css/scss.md)

- JS
  - [Redux](https://redux.js.org/)
  - [React Redux i18n](https://github.com/artisavotins/react-redux-i18n#readme)
  - [Redux Saga](docs//js/redux-saga.md)
  - [Query string](https://github.com/ljharb/qs)
  - [Axios](https://github.com/axios/axios)
  - [Routing](docs/js/routing.md)
  - [Reselect](docs/js/reselect.md)

## Overview

### Quickstart

1. Đầu tiên, hãy bắt đầu bằng cách cài đặt và chạy wiloke-react-boilerplate

   ```Shell
   npm install && npm start
   ```

   hoặc

   ```Shell
   yarn && yarn start
   ```

1. Mở [localhost:3000](http://localhost:3000) để xem nó hoạt động.

1. Sử dụng bộ tạo tích hợp để bắt đầu tính năng đầu tiên của bạn.

### Development

Chạy `npm start` để xem ứng dụng của bạn tại `localhost:3000`

`yarn storybook or npm run storybook`

Chạy Storybook\
Mở http: // localhost: 9009 để xem trên trình duyệt.\
Triển khai Storybook và kiểm tra giao diện người dùng với Chromatic [Open Demo](https://5f5b43872be3560022d03ffc-jyemwbgkan.chromatic.com/?path=/story/components-button--with-props)

### Building & Deploying

1. Chạy `npm run build`, sẽ biên dịch tất cả các tệp cần thiết thành thư mục `build`.
2. Tải nội dung của thư mục `build` lên thư mục gốc của máy chủ web của bạn.

### Structure

`src/` thư mục chứa toàn bộ mã ứng dụng của bạn, bao gồm cả CSS, JavaScript, HTML

### [Convention](./docs/general/convention.md)
