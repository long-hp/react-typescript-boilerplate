import React from 'react';
import { Welcome } from '@storybook/react/demo';
import { Space, Text, View, Image } from 'wiloke-react-core';

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
