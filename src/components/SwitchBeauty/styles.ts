import { css, Size, Theme } from 'wiloke-react-core';

interface SwitchBeautySizeInfo {
  height: number;
  'line-height': number;
  padding: string;
}

const switchBeautySizeMapping: Record<Size, SwitchBeautySizeInfo> = {
  'extra-small': { height: 22, 'line-height': 20, padding: '0 7px' },
  small: { height: 30, 'line-height': 28, padding: '0 7px' },
  medium: { height: 38, 'line-height': 36, padding: '0 10px' },
  large: { height: 46, 'line-height': 44, padding: '0 12px' },
};

export const container = (size: Size) => {
  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: ${switchBeautySizeMapping[size].padding};
    line-height: ${switchBeautySizeMapping[size]['line-height']}px;
    height: ${switchBeautySizeMapping[size].height}px;
  `;
};

export const disabled = (disabled: boolean) => ({ colors }: Theme) => {
  if (!disabled) {
    return {};
  }
  return css`
    background-color: ${colors.gray5} !important;
    opacity: 0.4;
    cursor: not-allowed;
  `;
};
