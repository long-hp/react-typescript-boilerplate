[3]: ../general/customize-theme.md
[5]: ./tachyons.md

<!--  content -->

# Wiloke Styles

Thuộc loại css có sẵn hỗ trợ chủ yếu hover cha vào con

## Effect Hover

  ```tsx
    'child-translateX-10' | 'child-translateX-20'
    ...
    'child-translateX-90' | 'child-translateX-100'

    'child-translateX--10' | 'child-translateX--20'
    ...
    'child-translateX--90' | 'child-translateX--100'

    'child-translateY-10' | 'child-translateY-20'
    ...
    'child-translateY-90' | 'child-translateY-100'

    'child-translateY--10' | 'child-translateY--20'
    ...
    'child-translateY--90' | 'child-translateY--100'

    'child-scale-80-100' | 'child-scale-90-100'
    'child-scale-100-110' | 'child-scale-100-120'
    'child-scale-120-100' | 'child-scale-110-100'

    'child-fadein-0' | 'child-fadein-10'
    'child-fadein-20' | 'child-fadein-30'
    'child-fadein-40' | 'child-fadein-50'

    'child-fadeout-0' | 'child-fadeout-10'
    'child-fadeout-20' | 'child-fadeout-30'
    'child-fadeout-40' | 'child-fadeout-50'

    'child-show' |'child-hide'
    'child-visible' | 'child-hidden' | 'child'

    'delay-0' | 'delay-10' | 'delay-20' | 'delay-30'
    'delay-40' | 'delay-50' | 'delay-60' | 'delay-70'
    'delay-80' | 'delay-90' | 'delay-100'
  ```

- Ví dụ

  ```tsx
  import React from 'react';
    import { View } from 'wiloke-react-core';

    const App = () => {
      return (
        <View backgroundColor="gray4" wilokeStyles={['parent-hover', 'w-20', 'h-20']}>
          <View backgroundColor="primary" tachyons={['w-100', 'h-100']} wilokeStyles="child-fadein-0"></View>
        </View>
      );
    }

    export default App;
  ```

<!-- end of content -->

[Prev][3] | [Next][5]
