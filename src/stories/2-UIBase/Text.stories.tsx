import React from 'react';
import getWithStylesProps from 'stories/utils/getWithStylesProps';
import { number } from '@storybook/addon-knobs';
import { View } from 'wiloke-react-core';
import Text from './base/Text';

export default {
  title: 'UI Base/Text',
  component: Text,
};

export const WithStyles = () => {
  return (
    <Text {...getWithStylesProps()}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum soluta fugit suscipit odio accusantium quas nostrum expedita tempora debitis
      blanditiis minus consequatur, nam eius sunt numquam nesciunt, quidem illum. Earum alias ea a explicabo. Explicabo corporis voluptatum
      repellendus itaque vero? Nam iste praesentium exercitationem recusandae dolorem. Quidem illum quod dolorem accusantium, modi iure non nisi
      dolores aliquid asperiores corporis incidunt excepturi soluta quasi. Unde perferendis, magni eaque quisquam ut facere, quod suscipit iure hic
      earum voluptatem molestiae itaque animi libero architecto, repellendus cupiditate reiciendis obcaecati. Rerum, assumenda optio error, temporibus
      facere ratione ea laborum iusto id provident libero blanditiis eum.
    </Text>
  );
};

export const WithTagName = () => {
  return (
    <View>
      <Text tagName="h1">Heading 1</Text>
      <Text tagName="h2">Heading 2</Text>
      <Text tagName="h3">Heading 3</Text>
      <Text tagName="h4">Heading 4</Text>
      <Text tagName="h5">Heading 5</Text>
      <Text tagName="h6">Heading 6</Text>
      <br />
      <Text tagName="p" size={number('Size (Demo tag p)', 15, { range: true, min: 8, max: 100 })}>
        p: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum soluta fugit suscipit odio accusantium quas nostrum expedita tempora debitis
        blanditiis minus consequatur, nam eius sunt numquam nesciunt, quidem illum. Earum alias ea a explicabo. Explicabo corporis voluptatum
        repellendus itaque vero? Nam iste praesentium exercitationem recusandae dolorem. Quidem illum quod dolorem accusantium, modi iure non nisi
        dolores aliquid asperiores corporis incidunt excepturi soluta quasi. Unde perferendis, magni eaque quisquam ut facere, quod suscipit iure hic
        earum voluptatem molestiae itaque animi libero architecto, repellendus cupiditate reiciendis obcaecati. Rerum, assumenda optio error,
        temporibus facere ratione ea laborum iusto id provident libero blanditiis eum.
      </Text>
      <br />
      <Text tagName="i">i: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, explicabo!</Text>
      <br />
      <br />
      <Text tagName="span">span: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, explicabo!</Text>
    </View>
  );
};
