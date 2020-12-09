import { TabPane, TabPaneProps as PaneProps } from 'rc-tabs';
import React, { FC, ReactNode } from 'react';
import { ColorNames, View } from 'wiloke-react-core';

export interface TabPaneBaseProps extends PaneProps {
  className?: string;
  /** Tiêu đề của tab pane hiện tại. Có thể là string hoặc react element */
  tab?: ReactNode;
  /** Giá trị tương ứng vói active key của tabbar */
  key?: string | number;
  /** Disabled = true sẽ không cho bấm vào tab đấy nữa */
  disabled?: boolean;
  /** Background color của Tab pane */
  backgroundColor?: ColorNames;
}

const TabPaneBase: FC<TabPaneBaseProps> = ({ disabled, key, children, tab, id, backgroundColor = 'light', className, ...rest }) => {
  return (
    <TabPane {...rest} tab={tab} id={id} key={key} disabled={disabled}>
      <View className={className} backgroundColor={backgroundColor} tachyons="pa2">
        {children}
      </View>
    </TabPane>
  );
};

export default TabPaneBase;
