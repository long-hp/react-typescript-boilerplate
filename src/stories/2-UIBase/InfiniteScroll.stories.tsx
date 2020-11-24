import React, { useEffect, useState } from 'react';
import { Text, View } from 'wiloke-react-core';
import InfiniteScroll from './base/InfiniteScroll';

export default {
  title: 'UI Base/InfiniteScroll',
  component: InfiniteScroll,
};

export const Example = () => {
  const [state, setState] = useState(['a', 'b', 'c', 'd']);
  const [isLoading, setIsLoading] = useState(false);

  const _handleLoadMore = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        const items = ['e', 'f', 'g', 'h'];
        setState(state => [...state, ...items]);
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  return (
    <InfiniteScroll offset={0} onScrollEnd={_handleLoadMore}>
      {state.map((item, index) => (
        <View key={item} backgroundColor="primary" color="light" height={500} tachyons={['pa3', 'mb3']}>
          Box {index + 1}
        </View>
      ))}
      {isLoading && <Text tagName="h1">Loading ...</Text>}
    </InfiniteScroll>
  );
};
