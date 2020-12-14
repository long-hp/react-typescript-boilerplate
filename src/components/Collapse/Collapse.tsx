import React, { CSSProperties, FC, Key, ReactNode } from 'react';
import { WithStylesProps } from 'wiloke-react-core';
import OpenContext from './CollapseContext';

export type CollapsibleType = 'header' | 'disabled';
export interface CollapseProps extends WithStylesProps {
  title?: ReactNode;
  activeKey?: Key | Key[];
  defaultActiveKey?: Key | Key[];
  accordion?: boolean;
  className?: string;
  style?: CSSProperties;
  collapsible?: CollapsibleType;
  expandIcon?: (props: object) => ReactNode;
  onChange?: (key: Key | Key[]) => void;
}

const Collapse: FC<CollapseProps> = ({}) => {
  return <OpenContext.Provider value={{ currentTarget: null }}></OpenContext.Provider>;
};

export default Collapse;
