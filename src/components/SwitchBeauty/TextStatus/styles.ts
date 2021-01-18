import { css, Size } from 'wiloke-react-core';

const textStatusSizeMapping: Record<Size, number> = {
  large: 14,
  medium: 14,
  small: 14,
  'extra-small': 12,
};

export const container = (size: Size) => css`
  font-size: ${textStatusSizeMapping[size]}px;
  line-height: 1.2;
`;
