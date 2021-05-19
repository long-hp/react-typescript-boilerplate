import Switch, { SwitchProps } from 'components/Switch/Switch';
import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Divider, Sticky, Text, useNightMode, View } from 'wiloke-react-core';
import { useSetDirection } from './slice/sliceDirection';
import * as css from './styles';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const direction = useSelector((state: AppState) => state.direction);
  const setDirection = useSetDirection();
  const { nightMode, setNightMode } = useNightMode();

  const _handleNightMode: SwitchProps['onValueChange'] = value => {
    setNightMode(value);
  };

  const _handleDirection: SwitchProps['onValueChange'] = value => {
    const direction = value ? 'rtl' : 'ltr';
    setDirection({ direction });
  };

  return (
    <Sticky>
      <View backgroundColor="light" css={{ padding: '20px' }}>
        <View tagName="header" css={css.inner}>
          <View css={css.link}>
            <Link to="/">
              <Text tagName="span" color="gray8" colorHover="primary">
                Home
              </Text>
            </Link>
          </View>
          <View css={css.link}>
            <Link
              to={{
                pathname: '/about',
                state: { abc: 'sdf' },
              }}
            >
              <Text tagName="span" color="gray8" colorHover="primary">
                About
              </Text>
            </Link>
          </View>
          <View css={[css.link, { display: 'flex', alignItems: 'center' }]}>
            <Text color="gray8" css={{ marginRight: '5px' }}>
              NightMode
            </Text>
            <Switch checked={nightMode} onValueChange={_handleNightMode} nightModeBlacklist="all" />
          </View>
          <View css={{ display: 'flex', alignItems: 'center' }}>
            <Text color="gray8" css={{ marginRight: '5px' }}>
              RTL
            </Text>
            <Switch checked={direction === 'rtl'} onValueChange={_handleDirection} nightModeBlacklist="all" />
          </View>
        </View>
      </View>
      <Divider color="gray2" />
    </Sticky>
  );
};

export default memo(Header);
