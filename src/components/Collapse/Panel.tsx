import React, { CSSProperties, FC, Key, ReactNode } from 'react';
import { View } from 'wiloke-react-core';
import { classNames, memoization } from 'wiloke-react-core/utils';

export interface PanelProps {
  id?: string;
  headerClass?: string;
  className?: string;
  header?: ReactNode;
  expandIcon?: ReactNode;
  showArrow?: boolean;
  active?: boolean;
  panelKey?: Key;
  style?: CSSProperties;
  onClick: (panelKey: Key) => void;
}

const Panel: FC<PanelProps> = ({ id, panelKey = '', style, className, children, onClick }) => {
  const _handleClick = () => {
    onClick(panelKey);
  };

  const combineProps = { className: classNames(className), style };

  return (
    <View {...combineProps} id={id} onClick={_handleClick}>
      {/* content */}
      <View>{children}</View>
    </View>
  );
};

export default memoization(Panel);
