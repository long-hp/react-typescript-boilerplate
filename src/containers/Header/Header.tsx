import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NightModeBlacklist, Sticky, Switch, SwitchProps, Text, View } from 'wiloke-react-core';
import { useSetNightMode } from './actions/actionNightMode';
import { useSetDirection } from './slice/sliceDirection';

export interface HeaderProps {
  nightModeBlacklist?: NightModeBlacklist;
}

const Header: FC<HeaderProps> = ({ nightModeBlacklist }) => {
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
      <View backgroundColor="dark1" tachyons="pa4" nightModeBlacklist={nightModeBlacklist}>
        <View tagName="header" tachyons={['flex', 'flex-row', 'justify-center', 'items-center']}>
          <View tachyons={['mr2', 'mr4-l']}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Text tagName="span" color="light" colorHover="primary" nightModeBlacklist={nightModeBlacklist}>
                Home
              </Text>
            </Link>
          </View>
          <View tachyons={['mr2', 'mr4-l']}>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Text tagName="span" color="light" colorHover="primary" nightModeBlacklist={nightModeBlacklist}>
                About
              </Text>
            </Link>
          </View>
          <View tachyons={['flex', 'items-center', 'mr2', 'mr4-l']}>
            <Text color="light" tachyons="mr2" nightModeBlacklist={nightModeBlacklist}>
              NightMode
            </Text>
            <Switch checked={nightMode} onChange={_handleNightMode} nightModeBlacklist={nightModeBlacklist} />
          </View>
          <View tachyons={['flex', 'items-center']}>
            <Text color="light" tachyons="mr2" nightModeBlacklist={nightModeBlacklist}>
              RTL
            </Text>
            <Switch checked={direction === 'rtl'} onChange={_handleDirection} nightModeBlacklist={nightModeBlacklist} />
          </View>
        </View>
      </View>
    </Sticky>
  );
};

export default memo(Header);
