# Tachyons

Có sẵn trong wiloke-react-core

## Cách sử dụng xem thêm [Tachyons](https://tachyons.io/)

- `@import '~wiloke-react-core/styles/tachyons.scss;'` vào file styles/mains.scss

```JS

 import React from 'react';
  import { View } from 'wiloke-react-core';

  const App = () => {
    render() {
      return (
         <View
          tachyons={['tr', 'db', 'absolute', 'flex', 'ma0']}
        >
          {innerContent}
        </View>
      );
    }
  }
  export default App;
```
