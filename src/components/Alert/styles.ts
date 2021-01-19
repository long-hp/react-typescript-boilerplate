import { css } from 'wiloke-react-core';

export type Size = 'small' | 'medium' | 'large';

const getSizeMapping = (...nums: number[]): Record<Size, number> => {
  return {
    small: nums[0],
    medium: nums[1],
    large: nums[2],
  };
};

export const container = css`
  debug: Alert-container;
  position: relative;
  overflow: hidden;
  padding: 15px;
  margin-bottom: 15px;
  border-style: solid;
`;

export const close = css`
  debug: Alert-close;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const enableClose = (closable: boolean) => {
  if (!closable) {
    return {};
  }
  return css`
    padding-right: 30px;
  `;
};

export const bgOverlay = css`
  debug: Alert-bgOverlay;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.05;
`;

export const icon = (size: Size) => css`
  debug: Alert-icon;
  position: absolute;
  left: 10px;
  cursor: pointer;
  top: ${getSizeMapping(15, 15, 16)[size]}px;
  font-size: ${getSizeMapping(18, 26, 30)[size]}px !important;
`;

export const message = (size: Size) => css`
  debug: Alert-message;
  display: block;
  font-size: ${getSizeMapping(14, 16, 20)[size]}px;
`;

export const description = (size: Size) => css`
  debug: Alert-description;
  margin-top: 4px;
  line-height: 22px;
  font-size: ${getSizeMapping(13, 14, 15)[size]}px;
`;

export const showIcon = (size: Size, showIcon: boolean) => {
  if (!showIcon) {
    return {};
  }
  return css`
    padding-left: ${size === 'small' ? 37 : 60}px;
  `;
};

export const small = css`
  debug: Alert-small;
  padding-top: 8px;
  padding-bottom: 8px;
`;
