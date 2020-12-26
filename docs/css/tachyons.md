[4]: ./wiloke-styles.md
[6]: ./css-modules.md

<!-- content -->

# Tachyons

Có sẵn trong wiloke-react-core

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

<!-- end of content -->

[Prev][4] | [Next][6]
