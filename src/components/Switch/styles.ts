import { css } from 'wiloke-react-core';

type Size = 'extra-small' | 'small' | 'medium' | 'large';

interface SizeInfo {
  height: number;
  lineHeight: number;
  handleSize: number;
  fontSize: number;
}

const settings = {
  space: 2,
  heightLarge: 24,
  heightMedium: 22,
  heightSmall: 20,
  heightExtraSmall: 18,
};

const handleHeightSpace = settings.space * 2;

const mappingSize: Record<Size, SizeInfo> = {
  large: {
    height: settings.heightLarge,
    lineHeight: settings.heightLarge,
    handleSize: settings.heightLarge - handleHeightSpace,
    fontSize: 14,
  },
  medium: {
    height: settings.heightMedium,
    lineHeight: settings.heightMedium,
    handleSize: settings.heightMedium - handleHeightSpace,
    fontSize: 13,
  },
  small: {
    height: settings.heightSmall,
    lineHeight: settings.heightSmall,
    handleSize: settings.heightSmall - handleHeightSpace,
    fontSize: 12,
  },
  'extra-small': {
    height: settings.heightExtraSmall,
    lineHeight: settings.heightExtraSmall,
    handleSize: settings.heightExtraSmall - handleHeightSpace,
    fontSize: 10,
  },
};

export const container = (size: Size) => css`
  font-size: 14px;
  user-select: none;
  transition: 0.2s all ease;
  position: relative;
  border-radius: 50px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  outline: unset;

  min-width: calc(${mappingSize[size].height}px * 1.835);
  height: ${mappingSize[size].height}px;
  line-height: ${mappingSize[size].lineHeight}px;
`;

export const disabled = (disabled: boolean) => {
  if (!disabled) {
    return {};
  }
  return css`
    opacity: 0.4;
    cursor: no-drop;
  `;
};

export const handle = (size: Size, check: boolean) => css`
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;

  top: ${settings.space}px;
  transform: ${!check ? `translateX(${settings.space}px)` : `translateX(calc(100% + ${settings.space}px))`};
  width: ${mappingSize[size].handleSize}px;
  height: ${mappingSize[size].handleSize}px;
`;

export const inner = (size: Size) => css`
  font-size: ${mappingSize[size].fontSize}px;
  transition: 0.2s ease;
  display: flex;
  margin: 0px;
  text-align: right;

  position: absolute;
  top: 50%;
  left: ${settings.space}px;
  transform: translateY(-50%);
`;
