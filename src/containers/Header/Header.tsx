import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Divider, Sticky, Switch, SwitchProps, Text, View } from 'wiloke-react-core';
import { useSetNightMode } from './actions/actionNightMode';
import { useSetDirection } from './slice/sliceDirection';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const nightMode = useSelector((state: AppState) => state.nightMode);
  const direction = useSelector((state: AppState) => state.direction);
  const setDirection = useSetDirection();
  const setNightMode = useSetNightMode();

  const _handleNightMode: SwitchProps['onChange'] = ({ checked }) => {
    setNightMode(checked);
  };

  const _handleDirection: SwitchProps['onChange'] = ({ checked }) => {
    const direction = checked ? 'rtl' : 'ltr';
    setDirection({ direction });
  };

  return (
    <Sticky>
      <View backgroundColor="light" tachyons="pa4">
        <View tagName="header" tachyons={['flex', 'flex-row', 'justify-center', 'items-center']}>
          <View tachyons={['mr2', 'mr4-l']}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Text tagName="span" color="gray8" colorHover="primary">
                Home
              </Text>
            </Link>
          </View>
          <View tachyons={['mr2', 'mr4-l']}>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Text tagName="span" color="gray8" colorHover="primary">
                About
              </Text>
            </Link>
          </View>
          <View tachyons={['flex', 'items-center', 'mr2', 'mr4-l']}>
            <Text color="gray8" tachyons="mr2">
              NightMode
            </Text>
            <Switch checked={nightMode} onChange={_handleNightMode} nightModeBlacklist="all" />
          </View>
          <View tachyons={['flex', 'items-center']}>
            <Text color="gray8" tachyons="mr2">
              RTL
            </Text>
            <Switch checked={direction === 'rtl'} onChange={_handleDirection} nightModeBlacklist="all" />
          </View>
        </View>
      </View>
      <Divider color="gray2" />
    </Sticky>
  );
};

export default memo(Header);
