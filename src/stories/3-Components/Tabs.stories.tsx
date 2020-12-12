import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import Tabs, { ScrollDirection, TabPosition } from 'components/Tabs';
import { range } from 'ramda';
import React, { ReactNode, useState } from 'react';
import getOptions from 'stories/utils/getOptions';
import { defaultColors, MaterialIcon, Text, View } from 'wiloke-react-core';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

export const Default = () => {
  const defaultActive = '1';
  const [activeKey, setActiveKey] = useState<string>(defaultActive);

  const _onChangeKey = (value: string) => {
    setActiveKey(value);
  };

  return (
    <Tabs defaultActiveKey={activeKey} onChange={_onChangeKey}>
      <Tabs.Pane tab="Tab title 1" key="1">
        <View>Tab content 1</View>
      </Tabs.Pane>
      <Tabs.Pane tab="Tab title 2" key="2">
        <View>Tab content 2</View>
      </Tabs.Pane>
      <Tabs.Pane tab="Tab title 3" key="3">
        <View>Tab content 3</View>
      </Tabs.Pane>
      <Tabs.Pane tab="Tab title 4" key="4" disabled>
        <View>Tab content 4</View>
      </Tabs.Pane>
    </Tabs>
  );
};

export const WithProps = () => {
  const navBarAnimated = boolean('Navbar Animation', true);
  const backgroundTabContent = select('Background Tab Content', getOptions(defaultColors), 'gray6');
  const colorTabContent = select('Color Text Tab Content', getOptions(defaultColors), 'light');
  const tabPosition = select(
    'Tab Position',
    getOptions<TabPosition[]>(['bottom', 'left', 'right', 'top']),
    'top',
  );

  const navBarGutter = number('Navbar Title Gutter', 15, { range: true, min: 0, max: 100 });

  const defaultActive = '1';
  const [activeKey, setActiveKey] = useState<string>(defaultActive);
  const [icon, setIcon] = useState<ReactNode>(<MaterialIcon name="keyboard_arrow_right" />);

  const fakeData = range(1, 8);

  const _onChangeKey = (value: string) => {
    setActiveKey(value);
    action('onChangeKey')(value);
  };

  const _onClickTab = (activeKey: string) => {
    action('onTabClick')(activeKey);
  };

  const _ontabScroll = (info: { direction: ScrollDirection }) => {
    if (info.direction === 'right') {
      setIcon(<MaterialIcon name="keyboard_arrow_left" />);
    } else if (info.direction === 'left') {
      setIcon(<MaterialIcon name="keyboard_arrow_right" />);
    }
    action('onTabScroll')(info);
  };

  return (
    <View container>
      <View tachyons={['w-60']}>
        <Tabs
          defaultActiveKey={activeKey}
          navBarAnimated={navBarAnimated}
          tabTitleGutter={navBarGutter}
          tabPosition={tabPosition}
          moreIcon={icon}
          onChange={_onChangeKey}
          onTabClick={_onClickTab}
          onTabScroll={_ontabScroll}
        >
          {fakeData.map(item => {
            return (
              <Tabs.Pane
                tab={`Tab Title ${item}`}
                disabled={item === 3}
                key={`${item}`}
                backgroundColor={backgroundTabContent}
                color={colorTabContent}
              >
                <Text>Tab content {item}</Text>
              </Tabs.Pane>
            );
          })}
        </Tabs>
      </View>
    </View>
  );
};
