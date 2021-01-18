import React, { FC } from 'react';
import { ColorNames, Text, WithStylesProps } from 'wiloke-react-core';
import * as css from './styles';

export interface TextUnderlineProps extends Pick<WithStylesProps, 'nightModeBlacklist'> {
  /** Set css font-size */
  textSize?: number | 'inherit';
  /** Color của component theo ThemeProvider */
  textColor?: ColorNames;
  /** React children */
  children: string | number;
  /** Màu của line */
  lineColor?: string;
  /** Kích thước line */
  lineSize?: number;
  /** Khoảng cách line tính từ bottom của chữ */
  lineBottomSpace?: number;
}

const TextUnderline: FC<TextUnderlineProps> = ({
  children,
  textColor = 'gray8',
  textSize,
  lineSize = 5,
  lineColor = '#94fbd1',
  lineBottomSpace = 10,
  nightModeBlacklist,
}) => {
  return (
    <Text
      tagName="span"
      css={css.container(lineSize, lineColor, lineBottomSpace)}
      color={textColor}
      size={textSize}
      nightModeBlacklist={nightModeBlacklist}
    >
      <Text tagName="span" nightModeBlacklist={nightModeBlacklist}>
        {children}
      </Text>
    </Text>
  );
};

export default TextUnderline;
