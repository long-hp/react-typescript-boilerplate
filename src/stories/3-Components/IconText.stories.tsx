import React from 'react';
import { text, color } from '@storybook/addon-knobs';
import { GridSmart, View } from 'wiloke-react-core';
import IconText from 'components/IconText/IconText';

export default {
  title: 'Components/IconText',
  component: (IconText as any).type,
};

export const WithProps = () => {
  const title = text('Title', 'Adipisicing elit');
  const desc = text(
    'Text',
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?`,
  );
  const iconColor = color('Icon Color', '#FD9B9B');

  return (
    <View backgroundColor="gray3" tachyons="pa3">
      <GridSmart columnWidth={300} columnCount={3}>
        <IconText iconColor={iconColor} iconName="heart-o" title={title} text={desc} />
        <IconText
          iconColor="#B06BF1"
          iconName="history"
          title="Latin literature"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
        />
        <IconText
          iconColor="#45CCDB"
          iconName="info"
          title="Many variations"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
        />
        <IconText
          iconColor="#e756d4"
          iconName="archive"
          title="Desktop publishing"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
        />
        <IconText
          iconColor="#45CCDB"
          iconName="music"
          title="Veniam possimus"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
        />
        <IconText
          iconColor="#42266e"
          iconName="hourglass-end"
          title="Simply dummy"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
        />
      </GridSmart>
    </View>
  );
};
