import Tabs, { TabsProps } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import React, { FC, ReactNode } from 'react';
import { useTheme, View } from 'wiloke-react-core';
import styles from './Tabbar.module.scss';
import TabPaneBase from './TabPane';

export type TabPosition = 'left' | 'right' | 'top' | 'bottom';
export type ScrollDirection = 'top' | 'bottom' | 'left' | 'right';

type PickTabsProp = Pick<
  TabsProps,
  | 'activeKey'
  | 'className'
  | 'children'
  | 'onChange'
  | 'onTabClick'
  | 'onTabScroll'
  | 'renderTabBar'
  | 'moreIcon'
  | 'tabPosition'
  | 'defaultActiveKey'
>;

export interface TabbarProps extends PickTabsProp {
  /** key của tabPanel đang active hiện tại */
  activeKey?: string;
  /** Default active tab */
  defaultActiveKey?: string;
  /** Vị trí của tab */
  tabPosition?: TabPosition;
  /** Hiệu ứng khi chuyển tiêu đề tab */
  navBarAnimated?: boolean;
  /** Hiệu ứng khi chuyển nội dung tab */
  tabPaneAnimated?: boolean;
  /** Khoảng cách giữa mỗi tab title */
  tabTitleGutter?: number;
  /** More Icon */
  moreIcon?: ReactNode;
  /** className */
  className?: string;
  /** render navbar */
  renderTabBar?: (props: any, DefaultTabBar: React.ComponentType) => React.ReactElement;
  /** Sự kiện onChange */
  onChange?: (activeKey: string) => void;
  /** Sự kiện scroll tab */
  onTabScroll?: (info: { direction: ScrollDirection }) => void;
  /** Sự kiện được gọi khi click vào tab */
  onTabClick?: (activeKey: string, e: React.KeyboardEvent | React.MouseEvent) => void;
}

interface TabbarStatic {
  TabPane: typeof TabPaneBase;
}

const Tabbar: FC<TabbarProps> & TabbarStatic = ({
  children,
  className,
  defaultActiveKey = '1',
  navBarAnimated = false,
  tabPaneAnimated = false,
  tabPosition = 'top',
  tabTitleGutter = 15,
  moreIcon = '...',
  activeKey,
  onTabScroll,
  onChange,
  onTabClick,
  renderTabBar,
}) => {
  const { direction } = useTheme();

  return (
    <View className={styles.container}>
      <Tabs
        activeKey={activeKey}
        direction={direction}
        defaultActiveKey={defaultActiveKey}
        tabPosition={tabPosition}
        animated={{ inkBar: navBarAnimated, tabPane: tabPaneAnimated }}
        tabBarGutter={tabTitleGutter}
        moreIcon={moreIcon}
        className={className}
        onChange={onChange}
        onTabClick={onTabClick}
        onTabScroll={onTabScroll}
        renderTabBar={renderTabBar}
      >
        {children}
      </Tabs>
    </View>
  );
};

Tabbar.TabPane = TabPaneBase;

export default Tabbar;
