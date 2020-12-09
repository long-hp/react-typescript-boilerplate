import React, { FC } from 'react';
import Tabs, { TabsProps } from 'rc-tabs';
import { View } from 'wiloke-react-core';
import styles from './Tabbar.module.scss';
import TabPaneBase from './TabPane';
import 'rc-tabs/assets/index.css';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';
type Direction = 'ltr' | 'rtl';

export interface TabbarProps extends TabsProps {
  /** key của tabPanel đang active hiện tại */
  activeKey?: string;
  /** Default active tab */
  defaultActiveKey?: string;
  /** Vị trí của tab */
  tabPosition?: TabPosition;
  /** ltr | rtl */
  direction?: Direction;
  /** Hiệu ứng khi chuyển tiêu đề tab */
  inkBarAnimated?: boolean;
  /** Hiệu ứng khi chuyển nội dung tab */
  tabPaneAnimated?: boolean;
  /** Khoảng cách giữa mỗi tab title */
  tabTitleGutter?: number;
  /** Sự kiện onChange */
  onChange?: (activeKey: string) => void;
  /** render props tabbar */
  renderTabBar?: (props: any, DefaultTabBar: React.ComponentType) => React.ReactElement;
  /** Sự kiện được gọi khi click vào tab */
  onTabClick?: (activeKey: string, e: React.KeyboardEvent | React.MouseEvent) => void;
}

interface TabbarStatic {
  TabPane: typeof TabPaneBase;
}

const Tabbar: FC<TabbarProps> & TabbarStatic = ({
  children,
  direction = 'ltr',
  defaultActiveKey = '1',
  inkBarAnimated = false,
  tabPaneAnimated = false,
  tabPosition = 'top',
  tabTitleGutter = 15,
  activeKey,
  onChange,
  onTabClick,
  renderTabBar,
}) => {
  return (
    <View className={styles.container}>
      <Tabs
        activeKey={activeKey}
        direction={direction}
        defaultActiveKey={defaultActiveKey}
        tabPosition={tabPosition}
        animated={{ inkBar: inkBarAnimated, tabPane: tabPaneAnimated }}
        tabBarGutter={tabTitleGutter}
        onChange={onChange}
        onTabClick={onTabClick}
        renderTabBar={renderTabBar}
        moreIcon="..."
      >
        {children}
      </Tabs>
    </View>
  );
};

Tabbar.TabPane = TabPaneBase;

export default Tabbar;
