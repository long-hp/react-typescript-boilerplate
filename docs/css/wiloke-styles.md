[3]: ../general/files
[5]: ./tachyons.md

<!--  content -->

# Wiloke Styles

Nhanh chóng xây dựng và thiết kế giao diện người dùng mới mà không cần viết CSS.

Được tích hợp sẵn trong wiloke-react-core

## Trong file file styles/mains.scss

```scss
@import '~wiloke-react-core/styles/wilokeStyles.scss';
```

## Cách sử dụng

- Sử dụng trong component View và Text

  ```js
  import React from 'react';
  import { Text, View } from 'wiloke-react-core';

  const App = () => {
    render() {
      return (
        <View>
          <View wilokeStyles="pa-10" />
          <Text wilokeStyles="pa-10" />
        </View>
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

  ```Shell
  'h-0' | 'h-1' | 'h-2' | ... | 'h-20'
  ```

---

- Width

  ```Shell
  'w-0' | 'w-1' | 'w-2' | ... | 'w-20'
  ```

---

- Padding

  ```Shell
  'pa-0' | 'pa-1' | 'pa-2' | ... | 'pa-30'
  'pt-0' | 'pt-1' | 'pt-2' | ... | 'pt-30'
  'pr-0' | 'pr-1' | 'pr-2' | ... | 'pr-30'
  'pl-0' | 'pl-1' | 'pl-2' | ... | 'pl-30'
  'pb-0' | 'pb-1' | 'pb-2' | ... | 'pb-30'
  ```

  Margin

  ```Shell
  'ma-0' | 'ma-1' | 'ma-2' | ... | 'ma-30'
  'mt-0' | 'mt-1' | 'mt-2' | ... | 'mt-30'
  'mb-0' | 'mb-1' | 'mb-2' | ... | 'mb-30'
  'ml-0' | 'ml-1' | 'ml-2' | ... | 'ml-30'
  'mr-0' | 'mr-1' | 'mr-2' | ... | 'mr-30'
  ```

## Theming

- Border Radius

  ```Shell
  'round-0' | 'round-1' | ... | 'round-20'
  ```

- Opacity

  ```Shell
  'o-0' | 'o-10' | 'o-15' | 'o-20' | 'o-25' | 'o-30' | ... |'o-90' | 'o-95' | 'o-100'`

  ```

- Backdrop-Filter

  ```Shell
  'backdrop-blur-4' | 'backdrop-blur-5' | 'backdrop-blur-6' | 'backdrop-blur-7' | 'backdrop-blur-8' | 'backdrop-blur-9' | 'backdrop-blur-10'
  ```

Typography

- Font size

  ```Shell
  'fs-8' | 'fs-9' | ... | 'fs-28' | 'fs-29' | 'fs-30'
  ```

- Font weight

  ```Shell
  'fw-100' | 'fw-200' | 'fw-300' | 'fw-400' | 'fw-500' | 'fw-600' | 'fw-700' | 'fw-800' | 'fw-900'
  ```

Effect Hover

- Lưu ý chỉ dùng cho một cấp

  ```Shell
    'hover-child-translateX-10' | 'hover-child-translateX-20'
    ...
    'hover-child-translateX-90' | 'hover-child-translateX-100'

    'hover-child-translateX--10' | 'hover-child-translateX--20'
    ...
    'hover-child-translateX--90' | 'hover-child-translateX--100'

    'hover-child-translateY-10' | 'hover-child-translateY-20'
    ...
    'hover-child-translateY-90' | 'hover-child-translateY-100'

    'hover-child-translateY--10' | 'hover-child-translateY--20'
    ...
    'hover-child-translateY--90' | 'hover-child-translateY--100'

    'hover-child-scale-80-100' | 'hover-child-scale-90-100'
    'hover-child-scale-100-110' | 'hover-child-scale-100-120'
    'hover-child-scale-120-100' | 'hover-child-scale-110-100'

    'hover-child-fadein-0' | 'hover-child-fadein-10'
    'hover-child-fadein-20' | 'hover-child-fadein-30'
    'hover-child-fadein-40' | 'hover-child-fadein-50'

    'hover-child-fadeout-0' | 'hover-child-fadeout-10'
    'hover-child-fadeout-20' | 'hover-child-fadeout-30'
    'hover-child-fadeout-40' | 'hover-child-fadeout-50'

    'hover-child-show' |'hover-child-hide'
    'hover-child-visible' | 'hover-child-hidden' | 'child'

    'delay-0' | 'delay-10' | 'delay-20' | 'delay-30'
    'delay-40' | 'delay-50' | 'delay-60' | 'delay-70'
    'delay-80' | 'delay-90' | 'delay-100'
  ```

- Ví dụ

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

<!-- end of content -->

[Prev][3] | [Next][5]
