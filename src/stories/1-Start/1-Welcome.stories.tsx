import React from 'react';
import { Welcome } from '@storybook/react/demo';
import { Space, Text, View, Image, GridSmart } from 'wiloke-react-core';

export default {
  title: 'Start/Welcome',
  component: Welcome,
};

export const Start = () => {
  return (
    <View>
      <Text tagName="h2">Những quy định chung khi làm dự án với react</Text>
      <Space size={20} />
      <Text tagName="h3">
        1. Sử dụng các components base có sẵn trong{' '}
        <a target="_blank" href="https://www.npmjs.com/package/wiloke-react-core">
          wiloke-react-core
        </a>
      </Text>
      <Space size={10} />
      <Image src="https://wiloke-stories.netlify.app/1.png" />

      <Space size={20} />
      <Text tagName="h3">
        2. Sử dụng bộ redux actions + classNames có sẵn trong{' '}
        <a target="_blank" href="https://www.npmjs.com/package/wiloke-react-core">
          wiloke-react-core/utils
        </a>
        . Chưa biết dùng có thể hỏi thêm.
      </Text>
      <Space size={10} />
      <Image src="https://wiloke-stories.netlify.app/2.png" />

      <Space size={20} />
      <Text tagName="h3">
        3. Sử dụng{' '}
        <a target="_blank" href="https://github.com/css-modules/css-modules">
          css module
        </a>{' '}
        cho dự án. Thẻ bao ngoài cùng nên là styles.container
      </Text>
      <Space size={10} />
      <Image src="https://wiloke-stories.netlify.app/3.png" />

      <Space size={20} />
      <Text tagName="h3">
        4. Sử dụng Atomic CSS{' '}
        <a target="_blank" href="http://tachyons.io/">
          tachyons
        </a>{' '}
        hoặc{' '}
        <a target="_blank" href="https://tailwindcss.com/">
          tailwind
        </a>{' '}
        cho dự án
      </Text>
      <Space size={10} />
      <Text>{`- tachyons: có sẵn trong các wiloke-react-core ( Cách sử dụng: <View tachyons={['flex', 'flex-row']}>Content...</View> )`}</Text>
      <Space size={10} />
      <Text>{`- tailwind: có config trong bản react-typescript-boilerplate ( Cách sử dụng: <View className="md:flex md:justify-center">Content...</View> )`}</Text>

      <Space size={20} />
      <Text tagName="h3">
        5. Giải thích qua về kiến trúc trong{' '}
        <a target="_blank" href="https://github.com/wiloke1/react-typescript-boilerplate">
          react-typescript-boilerplate
        </a>
      </Text>
      <Space size={10} />
      <Text>- @types: chứa các type overrides thư viện</Text>
      <Space size={10} />
      <Text>- components: chứa các thành phần chia sẻ dùng đi dùng lại ở mọi nơi trong dự án</Text>
      <Space size={10} />
      <Text>- containers: 1 loại components giúp ta kết nối với store để xử lý dữ liệu, layout page và kết nối các components</Text>
      <Space size={10} />
      <Text>- hooks: các file react hooks ( ví dụ: useToggle.ts, useMount.ts... )</Text>
      <Space size={10} />
      <Text>- models: chứa type dữ liệu trên server trả về</Text>
      <Space size={10} />
      <Text>- routes: nơi config react-router-dom</Text>
      <Space size={10} />
      <Text>- store: nơi chứa config redux store và general store</Text>
      <Space size={10} />
      <Text>- stories: list các components đã làm lên storybook</Text>
      <Space size={10} />
      <Text>- styles: chứa các scss global cho toàn bộ dự án</Text>
      <Space size={10} />
      <Text>- types: type global của dự án</Text>
      <Space size={10} />
      <Text>- utils: chứa constanst và các hàm tái sử dụng cho dự án</Text>
      <Space size={10} />

      <Space size={20} />
      <Text tagName="h3">6. Tên file nên viết như sau:</Text>
      <Space size={10} />
      <Text>
        - Sử dụng{' '}
        <a target="_blank" href="https://www.npmjs.com/package/rc-generate">
          React generate
        </a>{' '}
        để tạo các components nhanh chóng theo chuẩn
      </Text>
      <Space size={10} />
      <Text>- actionTodolist.ts ( không nên viết action.todolist.ts )</Text>
      <Space size={10} />
      <Text>- Tên file component nên viết theo camel case ( ví dụ: HomePage )</Text>
      <Space size={10} />
      <Text>
        - Các component props quá nhiều nên phân tách ra thành các phần ( ví dụ Post, Post.Header, Post.Body...). Hỏi thêm mọi người nếu chưa rõ cách
        làm.
      </Text>
      <Space size={10} />
      <Text>- interface prop nên nhớ phải export ra ( ví dụ: export interface ProductProps ... )</Text>
      <Space size={10} />
    </View>
  );
};

export const Colors = () => {
  return (
    <View>
      <Text tagName="h3" tachyons="mb3">
        Color Primary, Secondary, Quaternary, Tertiary, Quinary
      </Text>
      <GridSmart columnWidth={300} columnCount={3}>
        <View backgroundColor="primary" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: primary | scss: $color-primary
        </View>
        <View backgroundColor="secondary" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: secondary | scss: $color-secondary
        </View>
        <View backgroundColor="quaternary" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: quaternary | scss: $color-quaternary
        </View>
        <View backgroundColor="tertiary" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: tertiary | scss: $color-tertiary
        </View>
        <View backgroundColor="quinary" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: quinary | scss: $color-quinary
        </View>
      </GridSmart>
      <Space size={30} />
      <Text tagName="h3" tachyons="mb3">
        Color Warning, Danger...
      </Text>
      <GridSmart columnWidth={300} columnCount={3}>
        <View backgroundColor="danger" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: danger | scss: $color-danger
        </View>
        <View backgroundColor="warning" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: warning | scss: $color-warning
        </View>
        <View backgroundColor="success" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: success | scss: $color-success
        </View>
        <View backgroundColor="info" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: info | scss: $color-info
        </View>
        <View backgroundColor="heart" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: heart | scss: $color-heart
        </View>
      </GridSmart>
      <Space size={30} />
      <Text tagName="h3" tachyons="mb3">
        Color Social
      </Text>
      <GridSmart columnWidth={300} columnCount={3}>
        <View backgroundColor="facebook" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: facebook | scss: $color-facebook
        </View>
        <View backgroundColor="twitter" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: twitter | scss: $color-twitter
        </View>
        <View backgroundColor="dribbble" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: dribbble | scss: $color-dribbble
        </View>
        <View backgroundColor="youtube" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: youtube | scss: $color-youtube
        </View>
        <View backgroundColor="instagram" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: instagram | scss: $color-instagram
        </View>
        <View backgroundColor="tumblr" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: tumblr | scss: $color-tumblr
        </View>
        <View backgroundColor="vimeo" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: vimeo | scss: $color-vimeo
        </View>
        <View backgroundColor="vk" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: vk | scss: $color-vk
        </View>
        <View backgroundColor="digg" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: digg | scss: $color-digg
        </View>
        <View backgroundColor="github" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: github | scss: $color-github
        </View>
        <View backgroundColor="linkedin" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: linkedin | scss: $color-linkedin
        </View>
        <View backgroundColor="reddit" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: reddit | scss: $color-reddit
        </View>
        <View backgroundColor="stumbleupon" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: stumbleupon | scss: $color-stumbleupon
        </View>
        <View backgroundColor="pinterest" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: pinterest | scss: $color-pinterest
        </View>
        <View backgroundColor="behance" color="light" tachyons={['ph3', 'pv4']} radius="round">
          react: behance | scss: $color-behance
        </View>
      </GridSmart>
      <Space size={30} />
      <Text tagName="h3" tachyons="mb3">
        Color Gray, Dark, Light
      </Text>
      <GridSmart columnWidth={300} columnCount={3}>
        <View backgroundColor="transparent" tachyons={['ph3', 'pv4']} radius="round">
          react: transparent | scss: $color-transparent
        </View>
        <View backgroundColor="light" tachyons={['ph3', 'pv4']} radius="round">
          react: light | scss: $color-light
        </View>
        <View backgroundColor="gray1" tachyons={['ph3', 'pv4']} radius="round">
          react: gray1 | scss: $color-gray-1
        </View>
        <View backgroundColor="gray2" tachyons={['ph3', 'pv4']} radius="round">
          react: gray2 | scss: $color-gray-2
        </View>
        <View backgroundColor="gray3" tachyons={['ph3', 'pv4']} radius="round">
          react: gray3 | scss: $color-gray-3
        </View>
        <View backgroundColor="gray4" tachyons={['ph3', 'pv4']} radius="round">
          react: gray4 | scss: $color-gray-4
        </View>
        <View backgroundColor="gray5" tachyons={['ph3', 'pv4']} radius="round">
          react: gray5 | scss: $color-gray-5
        </View>
        <View backgroundColor="gray6" tachyons={['ph3', 'pv4']} radius="round">
          react: gray6 | scss: $color-gray-6
        </View>
        <View backgroundColor="gray7" color="gray3" tachyons={['ph3', 'pv4']} radius="round">
          react: gray7 | scss: $color-gray-7
        </View>
        <View backgroundColor="gray8" color="gray3" tachyons={['ph3', 'pv4']} radius="round">
          react: gray8 | scss: $color-gray-8
        </View>
        <View backgroundColor="gray9" color="gray3" tachyons={['ph3', 'pv4']} radius="round">
          react: gray9 | scss: $color-gray-9
        </View>
        <View backgroundColor="dark" color="gray3" tachyons={['ph3', 'pv4']} radius="round">
          react: dark | scss: $color-dark
        </View>
      </GridSmart>
    </View>
  );
};
