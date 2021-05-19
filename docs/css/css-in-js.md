[3]: ../general/customize-theme.md
[5]: ./wiloke-styles.md

<!-- content -->

# CSS IN JS ( Atomic CSS )

Css in js được phát triển dựa [fela js](https://github.com/robinweser/fela/blob/master/README.md)

## Usage

Example

```javascript
import { css } from 'wiloke-react-core';
export const container = css`
  debug: Alert-container;
  position: relative;
  overflow: hidden;
  padding: 15px;
  margin-bottom: 15px;
  border-style: solid;
`;
```

# or

```javascript
import { css } from 'wiloke-react-core';

export const loadingContainer = ({ colors }: Theme) =>
  css`
    width: 50px;
    height: 23px;
    border-radius: 6px;
    background-color: ${colors.gray5};
  `;
```

Với cách viết theo function bạn sẽ nhận được các setting ví dụ như colors, font, v.v trong [ThemeProvider](../general/customize-theme.md)

Đầu ra CSS được tạo sẽ giống như sau trong trường hợp thiết lập devMode trong ThemeProvider là false:

```CSS
.a { text-align: center }
.b { padding: 5px 10px }
.c { font-size: 14pt }
.d { border-radius: 5px }
.e:hover { font-size: 16pt }
.f:hover { box-shadow: 0 0 2px rgb(70, 70, 70) }
```

Trong trường hợp không sử dụng View hoặc Text của wiloke-react-core mà các thẻ được tạo từ html native (không khuyến khích) hoặc custom thư viện bên thứ 3 cách sử dụng để nhận được setting ThemeProvider qua className như sau:

```jsx
import { useStyleSheet, useTheme } from 'wiloke-react-core';
const Demo = () => {
  const { colors } = useTheme();
  const { styles } = useStyleSheet(colors);
  return <button className={styles(css.container)}>Test</button>;
};
```

[Prev][3] | [Next][5]
