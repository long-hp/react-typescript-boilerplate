# Wiloke Styles

Nhanh chóng xây dựng và thiết kế giao diện người dùng mới mà không cần viết CSS.

Được tích hợp sẵn trong wiloke-react-core

## Cách sử dụng

- `@import '~wiloke-react-core/styles/wilokeStyles.scss';` vào file styles/mains.scss

- Sử dụng trong component View và Text

  ```js
  import React from 'react';
  import { Text, View } from 'wiloke-react-core';

  const App = () => {
    render() {
      return (
          <View wilokeStyles="pa-10" />
          <Text wilokeStyles="pa-10" />
      );
    }
  }

  export default App;
  ```

- Cách sử dụng đối với một class trở lên

  ```js
  import React from 'react';
  import { View } from 'wiloke-react-core';

  const App = () => {
    render() {
      return (
          <View wilokeStyles={['pa-10', 'mr-2']} />
      );
    }
  }

  export default App;
  ```

## Layout

- Position

  `'abs-left-top' | 'abs-left-center' | 'abs-left-bottom' | 'abs-right-top' | 'abs-right-center' | 'abs-right-bottom' | 'abs-center-top' | 'abs-center-center' | 'abs-center-bottom'`

  Lưu ý chỉ áp dụng cho position absolute

---

- Height

  `'h-0' | 'h-1' | 'h-2' | 'h-3' | 'h-4' | 'h-5' | 'h-6' | 'h-7' | 'h-8' | 'h-9' | 'h-10' | 'h-11' | 'h-12' | 'h-13' | 'h-14' | 'h-15' | 'h-16' | 'h-17' | 'h-18' | 'h-19' | 'h-20'`

---

- Width

  `'w-0' | 'w-1' | 'w-2' | 'w-3' | 'w-4' | 'w-5' | 'w-6' | 'w-7' | 'w-8' | 'w-9' | 'w-10' | 'w-11' | 'w-12' | 'w-13' | 'w-14' | 'w-15' | 'w-16' | 'w-17' | 'w-18' | 'w-19' | 'w-20'`

---

- Padding

  `'pa-0' | 'pa-1' | 'pa-2' | 'pa-3' | 'pa-4' | 'pa-5' | 'pa-6' | 'pa-7' | 'pa-8' | 'pa-9' | 'pa-10' | 'pa-11' | 'pa-12' | 'pa-13' | 'pa-14' | 'pa-15' | 'pa-16' | 'pa-17' | 'pa-18' | 'pa-19' | 'pa-20' | 'pa-21' | 'pa-22' | 'pa-23' | 'pa-24' | 'pa-25' | 'pa-26' | 'pa-27' | 'pa-28' | 'pa-29' | 'pa-30' | 'pt-0' | 'pt-1' | 'pt-2' | 'pt-3' | 'pt-4' | 'pt-5' | 'pt-6' | 'pt-7' | 'pt-8' | 'pt-9' | 'pt-10' | 'pt-11' | 'pt-12' | 'pt-13' | 'pt-14' | 'pt-15' | 'pt-16' | 'pt-17' | 'pt-18' | 'pt-19' | 'pt-20' | 'pt-21' | 'pt-22' | 'pt-23' | 'pt-24' | 'pt-25' | 'pt-26' | 'pt-27' | 'pt-28' | 'pt-29' | 'pt-30' | 'pr-0' | 'pr-1' | 'pr-2' | 'pr-3' | 'pr-4' | 'pr-5' | 'pr-6' | 'pr-7' | 'pr-8' | 'pr-9' | 'pr-10' | 'pr-11' | 'pr-12' | 'pr-13' | 'pr-14' | 'pr-15' | 'pr-16' | 'pr-17' | 'pr-18' | 'pr-19' | 'pr-20' | 'pr-21' | 'pr-22' | 'pr-23' | 'pr-24' | 'pr-25' | 'pr-26' | 'pr-27' | 'pr-28' | 'pr-29' | 'pr-30' | 'pb-0' | 'pb-1' | 'pb-2' | 'pb-3' | 'pb-4' | 'pb-5' | 'pb-6' | 'pb-7' | 'pb-8' | 'pb-9' | 'pb-10' | 'pb-11' | 'pb-12' | 'pb-13' | 'pb-14' | 'pb-15' | 'pb-16' | 'pb-17' | 'pb-18' | 'pb-19' | 'pb-20' | 'pb-21' | 'pb-22' | 'pb-23' | 'pb-24' | 'pb-25' | 'pb-26' | 'pb-27' | 'pb-28' | 'pb-29' | 'pb-30' | 'pl-0' | 'pl-1' | 'pl-2' | 'pl-3' | 'pl-4' | 'pl-5' | 'pl-6' | 'pl-7' | 'pl-8' | 'pl-9' | 'pl-10' | 'pl-11' | 'pl-12' | 'pl-13' | 'pl-14' | 'pl-15' | 'pl-16' | 'pl-17' | 'pl-18' | 'pl-19' | 'pl-20' | 'pl-21' | 'pl-22' | 'pl-23' | 'pl-24' | 'pl-25' | 'pl-26' | 'pl-27' | 'pl-28' | 'pl-29' | 'pl-30'`

- Margin

  `'ma-0' | 'ma-1' | 'ma-2' | 'ma-3' | 'ma-4' | 'ma-5' | 'ma-6' | 'ma-7' | 'ma-8' | 'ma-9' | 'ma-10' | 'ma-11' | 'ma-12' | 'ma-13' | 'ma-14' | 'ma-15' | 'ma-16' | 'ma-17' | 'ma-18' | 'ma-19' | 'ma-20' | 'ma-21' | 'ma-22' | 'ma-23' | 'ma-24' | 'ma-25' | 'ma-26' | 'ma-27' | 'ma-28' | 'ma-29' | 'ma-30' | 'mt-0' | 'mt-1' | 'mt-2' | 'mt-3' | 'mt-4' | 'mt-5' | 'mt-6' | 'mt-7' | 'mt-8' | 'mt-9' | 'mt-10' | 'mt-11' | 'mt-12' | 'mt-13' | 'mt-14' | 'mt-15' | 'mt-16' | 'mt-17' | 'mt-18' | 'mt-19' | 'mt-20' | 'mt-21' | 'mt-22' | 'mt-23' | 'mt-24' | 'mt-25' | 'mt-26' | 'mt-27' | 'mt-28' | 'mt-29' | 'mt-30' | 'mr-0' | 'mr-1' | 'mr-2' | 'mr-3' | 'mr-4' | 'mr-5' | 'mr-6' | 'mr-7' | 'mr-8' | 'mr-9' | 'mr-10' | 'mr-11' | 'mr-12' | 'mr-13' | 'mr-14' | 'mr-15' | 'mr-16' | 'mr-17' | 'mr-18' | 'mr-19' | 'mr-20' | 'mr-21' | 'mr-22' | 'mr-23' | 'mr-24' | 'mr-25' | 'mr-26' | 'mr-27' | 'mr-28' | 'mr-29' | 'mr-30' | 'mb-0' | 'mb-1' | 'mb-2' | 'mb-3' | 'mb-4' | 'mb-5' | 'mb-6' | 'mb-7' | 'mb-8' | 'mb-9' | 'mb-10' | 'mb-11' | 'mb-12' | 'mb-13' | 'mb-14' | 'mb-15' | 'mb-16' | 'mb-17' | 'mb-18' | 'mb-19' | 'mb-20' | 'mb-21' | 'mb-22' | 'mb-23' | 'mb-24' | 'mb-25' | 'mb-26' | 'mb-27' | 'mb-28' | 'mb-29' | 'mb-30' | 'ml-0' | 'ml-1' | 'ml-2' | 'ml-3' | 'ml-4' | 'ml-5' | 'ml-6' | 'ml-7' | 'ml-8' | 'ml-9' | 'ml-10' | 'ml-11' | 'ml-12' | 'ml-13' | 'ml-14' | 'ml-15' | 'ml-16' | 'ml-17' | 'ml-18' | 'ml-19' | 'ml-20' | 'ml-21' | 'ml-22' | 'ml-23' | 'ml-24' | 'ml-25' | 'ml-26' | 'ml-27' | 'ml-28' | 'ml-29' | 'ml-30'`

## Theming

- Border Radius

  `'round-0' | 'round-1' | 'round-2' | 'round-3' | 'round-4' | 'round-5' | 'round-6' | 'round-7' | 'round-8' | 'round-9' | 'round-10' | 'round-11' | 'round-12' | 'round-13' | 'round-14' | 'round-15' | 'round-16' | 'round-17' | 'round-18' | 'round-19' | 'round-20'`

- Opacity

  `'o-0' | 'o-10' | 'o-15' | 'o-20' | 'o-25' | 'o-30' | 'o-35' | 'o-40' | 'o-45' | 'o-50' | 'o-55' | 'o-60' | 'o-65' | 'o-70' | 'o-75' | 'o-80' | 'o-85' | 'o-90' | 'o-95' | 'o-100'`

Typography

- Font size

  `'fs-8' | 'fs-9' | 'fs-10' | 'fs-11' | 'fs-12' | 'fs-13' | 'fs-14' | 'fs-15' | 'fs-16' | 'fs-17' | 'fs-18' | 'fs-19' | 'fs-20' | 'fs-21' | 'fs-22' | 'fs-23' | 'fs-24' | 'fs-25' | 'fs-26' | 'fs-27' | 'fs-28' | 'fs-29' | 'fs-30'`

- Font weight

  `'fw-100' | 'fw-200' | 'fw-300' | 'fw-400' | 'fw-500' | 'fw-600' | 'fw-700' | 'fw-800' | 'fw-900'`

Effect Hover

Lưu ý chỉ dùng cho một cấp

`'hover-child-translateX-10' | 'hover-child-translateX-20' | 'hover-child-translateX-30' | 'hover-child-translateX-40' | 'hover-child-translateX-50' | 'hover-child-translateX-60' | 'hover-child-translateX-70' | 'hover-child-translateX-80' | 'hover-child-translateX-90' | 'hover-child-translateX-100' | 'hover-child-translateX--10' | 'hover-child-translateX--20' | 'hover-child-translateX--30' | 'hover-child-translateX--40' | 'hover-child-translateX--50' | 'hover-child-translateX--60' | 'hover-child-translateX--70' | 'hover-child-translateX--80' | 'hover-child-translateX--90' | 'hover-child-translateX--100' | 'hover-child-translateY-10' | 'hover-child-translateY-20' | 'hover-child-translateY-30' | 'hover-child-translateY-40' | 'hover-child-translateY-50' | 'hover-child-translateY-60' | 'hover-child-translateY-70' | 'hover-child-translateY-80' | 'hover-child-translateY-90' | 'hover-child-translateY-100' | 'hover-child-translateY--10' | 'hover-child-translateY--20' | 'hover-child-translateY--30' | 'hover-child-translateY--40' | 'hover-child-translateY--50' | 'hover-child-translateY--60' | 'hover-child-translateY--70' | 'hover-child-translateY--80' | 'hover-child-translateY--90' | 'hover-child-translateY--100' | 'child' | 'hover-child-scale-80-100' | 'hover-child-scale-80-100' | 'hover-child-scale-90-100' | 'hover-child-scale-90-100' | 'hover-child-scale-100-110' | 'hover-child-scale-100-110' | 'hover-child-scale-100-120' | 'hover-child-scale-100-120' | 'hover-child-scale-120-100' | 'hover-child-scale-120-100' | 'hover-child-scale-110-100' | 'hover-child-scale-110-100' | 'hover-child-fadein-0' | 'hover-child-fadein-10' | 'hover-child-fadein-20' | 'hover-child-fadein-30' | 'hover-child-fadein-40' | 'hover-child-fadein-50' | 'hover-child-fadeout-0' | 'hover-child-fadeout-10' | 'hover-child-fadeout-20' | 'hover-child-fadeout-30' | 'hover-child-fadeout-40' | 'hover-child-fadeout-50' | 'hover-child-show' | 'hover-child-hide' | 'hover-child-visible' | 'hover-child-hidden' | 'delay-0' | 'delay-10' | 'delay-20' | 'delay-30' | 'delay-40' | 'delay-50' | 'delay-60' | 'delay-70' | 'delay-80' | 'delay-90' | 'delay-100'`

Ví dụ

```js
 import React from 'react';
  import { View } from 'wiloke-react-core';

  const App = () => {
    render() {
      return (
          <View backgroundColor='gray4'
          wilokeStyles={['hover-child-show', 'w-20', 'h-20']}>
            <View backgroundColor='primary'
          wilokeStyles='child'></View>
          </View>
      );
    }
  }

  export default App;
```
