import { TabPane, TabPaneProps } from 'rc-tabs';
import React, { CSSProperties, FC, ReactNode } from 'react';
import { ColorNames, View } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import * as css from '../styles';

export interface TabPaneBaseProps extends TabPaneProps {
  className?: string;
  /** Tiêu đề của tab pane hiện tại. Có thể là string hoặc react element */
  tab?: ReactNode;
  /** Giá trị tương ứng vói active key của tabbar */
  key?: string | number;
  /** Disabled = true sẽ không active tab và không cho bấm vào tab đấy nữa */
  disabled?: boolean;
  /** Background color của Tab pane */
  backgroundColor?: ColorNames;
  /** Color text của Tab pane */
  color?: ColorNames;
  /** Forced render of content in tabs, not lazy render after clicking on tabs */
  forceRender?: boolean;
  /** style inline */
  style?: CSSProperties;
}

const TabPaneBase: FC<TabPaneBaseProps> = ({
  disabled,
  key,
  children,
  tab,
  tabKey,
  style,
  forceRender = false,
  backgroundColor = 'light',
  color = 'dark',
  className,
  ...rest
}) => {
  const combineProps = { style, className: classNames(className, 'TabPane') };
  return (
    <TabPane {...rest} {...combineProps} tab={tab} tabKey={tabKey} key={key} disabled={disabled} forceRender={forceRender}>
      <View backgroundColor={backgroundColor} color={color} css={css.tabPaneChildren}>
        {children}
      </View>
    </TabPane>
  );
};

export default TabPaneBase;
