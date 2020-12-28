[6]: ./css-modules.md
[8]: ../js/redux-saga.md

<!-- content -->

# SCSS

- `@import '~wiloke-react-core/styles/themes.scss';` vào file styles/mains.scss.
  Để sử dụng các varialbles, mixin, function mặc định trong core thì cần phải import file theme.scss trong abstracts.scss

- Hàm createGrid trong main.scss để tạo grid giống bootstrap cho component View

  ```scss
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

  sử dụng View như sau:

  ```tsx
  <View row>
    <View columns={[12, 12, 4, 3]}>Column 1</View>
    <View columns={[12, 12, 4, 3]}>Column 2</View>
    <View columns={[12, 12, 4, 3]}>Column 3</View>
    <View columns={[12, 12, 4, 3]}>Column 4</View>
  </View>
  ```

  columns 12,12,4,3 tương ứng với col-xs-12 col-sm-12 col-md-4 col-lg-3

- Hàm createGridEqual trong main.scss để tạo ra grid dành cho component View bật prop gridEqual và GridSmart

  ```scss
    @include createGridEqual((
      xs: 'default',
      sm: 768,
      md: 992,
      lg: 1300
    ));
  ```

  Sử dụng với View:

  ```tsx
  <View gridEqual colXs={1} colSm={2} colMd={3} colLg={4} gapXs={10}>
    <View>Column 1</View>
    <View>Column 2</View>
    <View>Column 3</View>
    <View>Column 4</View>
  </View>
  ```

  Sử dụng với GridSmart:

  ```tsx
  <GridSmart columnWidth={200}>
    <View>Column 1</View>
    <View>Column 2</View>
    <View>Column 3</View>
    <View>Column 4</View>
  </GridSmart>
  ```

- function px() và mixin rtlDirection dành riêng cho rtl
  hàm px cho phép sau này có thể chuyển đổi giá trị giữ im px hoặc chuyển đổi sang rem. Nếu muốn chuyển đổi pixel sang rem thì trong variables.scss ta có \$pixel-to-rem: true; và true cũng là mặc định

  ```scss
  .example {
  font-size: px(14);
  @include rtlDirection {
    padding-left: 10px;
  }
  ```

- Cách sử dung autoDirection trong scss. Chỉ áp dụng cho các thuộc tính có left hoặc right, và trục X

  ```scss
    .example {
    @include autoDirection ((
      padding-left: px(10);
    ))
  ```

- Cách sử dung nightModeBlackList trong scss

  ```scss
  .shadow {
  box-shadow: 0 px(5) px(15) 0 rgba(nightModeBlacklist($rgb-dark), 0.10);
  }
  ```

<!-- end of content -->

[Prev][6] | [Next][8]
