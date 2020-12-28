[1]: ./introduction.md
[3]: ./files.md

<!-- contend -->

# Command Line Commands

## Eject Components

## Cách sử dụng

```Shell
  yarn ce
```

![alt ảnh sau khi chay yarn ce](../img/img1.png)

UI Base là các components có sẵn chỉ cần import trong [wiloke-react-core](https://www.npmjs.com/package/wiloke-react-core) ví dụ như sau

```Shell
import { View, Image } from 'wiloke-react-core';
```

Ngoài UI Base ra thì ta còn có thể sử dụng lệnh `yarn ce` để eject components có sẵn và nó sẽ xuất hiện trong thư mục components của dự án ( những components này sẽ xuất hiện trong dự án giúp ta có thể custom lại style cũng như code logic nếu cần )

![alt ảnh các component base trên storybook](https://wiloke-images.netlify.app/wiloke-react-core/1.png)

## Generators

Cho phép bạn tự động tạo mã soạn sẵn cho các phần chung của ứng dụng, cụ thể là các components và containers. Xem thêm tại [https://github.com/wiloke1/rc-generate](https://github.com/wiloke1/rc-generate)

### Easy use with npx

```Shell
  npx rc-generate --style scss --redux saga --component:name components/Buttons
```

### Or use with npm global

```Shell
  rc-generate --style scss --redux saga --component:name components/Button
```

<!-- end of contend -->

[Prev][1] | [Next][3]
