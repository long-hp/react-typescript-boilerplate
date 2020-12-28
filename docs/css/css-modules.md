[5]: ./tachyons.md
[7]: ./scss.md

<!-- content -->

# CSS Module

Thẻ bao ngoài cùng nên là styles.container

```tsx
  import React from 'react';
  import { View } from 'wiloke-react-core';
  import styles from './MyStyle.module.scss';

  const App = () => {
    render() {
      return (
         <View className={styles.container}>CSS Module</View>
      );
    }
  }
  export default App;
```

<!-- end of content -->

[Prev][5] | [Next][7]
