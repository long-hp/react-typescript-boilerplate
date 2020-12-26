# CSS Module

Thẻ bao ngoài cùng nên là styles.container

## Cách sử dụng xem thêm [Tachyons](https://tachyons.io/)

```JS

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
