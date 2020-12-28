[4]: ./wiloke-styles.md
[6]: ./css-modules.md

<!-- content -->

# Tachyons

Tachyons là 1 atomic css có sẵn trong wiloke-react-core
Xem thêm [Tachyons](https://tachyons.io/)

## Trong file file styles/mains.scss

```scss
@import '~wiloke-react-core/styles/tachyons.scss';
```

## Cách sử dụng

```tsx

 import React from 'react';
  import { View } from 'wiloke-react-core';

  const App = () => {
    render() {
      return (
         <View
          tachyons={['tr', 'db', 'absolute', 'flex', 'ma0']}
        >
          Content...
        </View>
      );
    }
  }
  export default App;
```

<!-- end of content -->

[Prev][4] | [Next][6]
