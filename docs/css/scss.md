# SCSS

- `@import '~wiloke-react-core/styles/themes.scss';` vào file styles/mains.scss.
  Để sử dụng các varialbles, mixin, function mặc định trong core thì cần phải import file theme.scss trong abstracts.scss

- Hàm createGrid trong main.scss để tạo grid giống bootstrap cho component View

```SCSS
  @include createGrid((
    container: (
      width: 1300,
      gap: 15
    ),
    columns: (
      max: 12,
      gap: 30
    ),
    breakpoints: (
      default: xs,
      sm: 768,
      md: 992,
      lg: 1300
    )
  ));
```

- Hàm createGridEqual trong main.scss để tạo ra grid dành cho component View bật prop gridEqual và GridSmart

```SCSS
  @include createGridEqual((
    xs: 'default',
    sm: 768,
    md: 992,
    lg: 1300
  ));
```

- function px() và mixin rtlDirection dành riêng cho rtl
  hàm px cho phép sau này có thể chuyển đổi giá trị giữ im px hoặc chuyển đổi sang rem. Nếu muốn chuyển đổi pixel sang rem thì trong variables.scss ta có \$pixel-to-rem: true; và true cũng là mặc định

- Cách sử dung autoDirection trong scss. Chỉ áp dụng cho các thuộc tính có left hoặc right, và trục X

  ```SCSS
  .shadow {
  box-shadow: 0 px(5) px(15) 0 rgba(nightModeBlacklist($rgb-dark), 0.10);
  }
  ```
