[2]: ./commands.md
[4]: ../css/css-in-js.md

# Theme Provider

Theme Provider cho phép ta tùy chỉnh mã để đáp ứng sự đa dạng về giao diện người dùng theo yêu cầu của doanh nghiệp hoặc khách hàng, bao gồm color, nightModeColor, direction v.v.

Example

```tsx
import { ThemeOverrides, ThemeProvider } from 'wiloke-react-core';

const themeOverrides: ThemeOverrides = {
  fonts: {
    primary: 'Roboto, sans-serif',
    secondary: 'Roboto, sans-serif',
    ...
  },
  colors: {
    primary: '#5353C5',
    secondary: '#2DDE98',
    tertiary: '#D14A66',
    quaternary: '#FFC20E',
    light: '#ffffff',
    gray1: '#F7F6F9',
    gray2: '#F0F0F2',
    gray3: '#ECEBEE',
    gray4: '#DBDADE',
    gray5: '#a9a7ad',
    gray6: '#929099',
    gray7: '#75737C',
    gray8: '#3D3D47',
    gray9: '#27262B',
    dark: '#19181b',
  },
  nightModeColors: {
    dark: '#ffffff',
    gray9: '#F7F6F9',
    gray8: '#F0F0F2',
    gray7: '#ECEBEE',
    gray6: '#DBDADE',
    gray5: '#a9a7ad',
    gray4: '#929099',
    gray3: '#75737C',
    gray2: '#3D3D47',
    gray1: '#27262B',
    light: '#202024',
  },
  round: 6,
  ...
};

const AppContent = () => {
  return <ThemeProvider themeOverrides={themeOverrides}>content...</ThemeProvider>;
};
```

[Prev][2] | [Next][4]
