import React, { FC, CSSProperties } from 'react';
import { ColorNames, Text, WithStylesProps } from 'wiloke-react-core';
import styles from './TextUnderline.module.scss';

export interface TextUnderlineProps extends Pick<WithStylesProps, 'nightModeBlacklist'> {
  /** Set css font-size */
  size?: number | 'inherit';
  /** Color của component theo ThemeProvider */
  color?: ColorNames;
  /** React children */
  children: string | number;
  /** Màu của line */
  lineColor?: string;
  /** Kích thước line */
  lineSize?: number;
  /** Khoảng cách line tính từ bottom của chữ */
  lineBottomSpace?: number;
}

const TextUnderline: FC<TextUnderlineProps> = ({ children, color = 'gray8', size, lineSize, lineColor, lineBottomSpace, nightModeBlacklist }) => {
  const lineSizeStyle: CSSProperties = !!lineSize ? { borderWidth: lineSize } : {};
  const lineColorStyle: CSSProperties = !!lineColor ? { borderColor: lineColor } : {};
  const lineBottomSpaceWrapStyle: CSSProperties = !!lineBottomSpace ? { top: -lineBottomSpace } : {};
  const lineBottomSpaceStyle: CSSProperties = !!lineBottomSpace ? { top: lineBottomSpace } : {};

  return (
    <Text
      tagName="span"
      className={styles.container}
      color={color}
      size={size}
      style={{ ...lineSizeStyle, ...lineColorStyle, ...lineBottomSpaceWrapStyle }}
      nightModeBlacklist={nightModeBlacklist}
    >
      <Text tagName="span" style={lineBottomSpaceStyle} nightModeBlacklist={nightModeBlacklist}>
        {children}
      </Text>
    </Text>
  );
};

export default TextUnderline;
