import { ColorNames, css, Size, Theme } from 'wiloke-react-core';
import { RadioVariant } from './Radio';

interface RadioButtonSizeInfo {
  height: number;
  'font-size': number;
  'line-height': number;
  padding: string;
}

const controlSizeMapping: Record<Size, number> = {
  large: 30,
  medium: 24,
  small: 18,
  'extra-small': 12,
};

const dotSizeMapping: Record<Size, number> = {
  large: 16,
  medium: 12,
  small: 8,
  'extra-small': 4,
};

const radioButtonSizeMapping: Record<Size, RadioButtonSizeInfo> = {
  large: {
    height: 46,
    'font-size': 14,
    'line-height': 44,
    padding: '0 42px',
  },

  medium: { height: 38, 'font-size': 12, 'line-height': 36, padding: '0 15px' },
  small: { height: 30, padding: '0 7px', 'line-height': 28, 'font-size': 12 },
  'extra-small': {
    height: 22,
    padding: '0 7px',
    'line-height': 20,
    'font-size': 10,
  },
};

export const container = (disabled: boolean, size: Size) => css`
  debug: Radio-container;
  display: inline-flex;
  align-items: center;
  font-size: ${size === 'extra-small' ? 10 : 14}px;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  opacity: ${disabled ? 0.4 : 1};
`;

export const radioWrapper = css`
  debug: Radio-wrapper;
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

export const radioNative = (variant: RadioVariant) => {
  if (variant === 'default') {
    return css`
      debug: Radio-Default-Native;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      opacity: 0;
    `;
  }
  return css`
    debug: Radio-Button-Native;
    width: 0;
    height: 0;
    opacity: 0;
  `;
};

export const control = (size: Size) => css`
  debug: Radio-control;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${controlSizeMapping[size]}px;
  height: ${controlSizeMapping[size]}px;
`;

export const dot = (size: Size, checked: boolean) => css`
  debug: Radio-dot;
  opacity: ${checked ? 1 : 0};
  width: ${dotSizeMapping[size]}px;
  height: ${dotSizeMapping[size]}px;
`;

export const dotCheckBackground = (checkedState: boolean, disabled: boolean, activeColor: ColorNames) => ({ colors }: Theme) => {
  if (checkedState && !disabled) {
    return css`
      debug: Radio-dotCheckBackground;
      background-color: ${colors[activeColor]};
    `;
  } else if (checkedState && disabled) {
    return css`
      debug: Radio-dotCheckBackground;
      background-color: ${colors.gray5};
    `;
  }
  return css`
    debug: Radio-dotCheckBackground;
    background-color: ${colors.light};
  `;
};

export const radioButtonContainer = (size: Size) => css`
  debug: RadioButton-container;
  position: relative;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  height: 38px;
  padding: 0 15px;
  font-size: 12px;
  line-height: 36px;
  border-width: 1px 1px 1px 0;
  border-color: inherit;

  &:first-child {
    border-radius: 5px 0 0 5px;
    border-left: 1px solid;
    border-color: inherit;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
  }

  height: ${radioButtonSizeMapping[size].height}px;
  font-size: ${radioButtonSizeMapping[size]['font-size']}px;
  line-height: ${radioButtonSizeMapping[size]['line-height']}px;
  padding: ${radioButtonSizeMapping[size].padding};
`;

export const disabled = (disabled: boolean) => ({ colors }: Theme) => {
  if (!disabled) {
    return {};
  }
  return css`
    debug: RadioButton-disabled;
    background-color: ${colors.gray4};
    color: ${colors.gray5} !important;
    cursor: not-allowed;
  `;
};

export const radioButtonCheckBackground = (checkedState: boolean, disabled: boolean, activeColor: ColorNames) => ({ colors }: Theme) => {
  if (checkedState && !disabled) {
    return css`
      debug: RadioButton-background;
      background-color: ${colors[activeColor]};
    `;
  } else if (checkedState && disabled) {
    return css`
      debug: RadioButton-background;
      background-color: ${colors.gray4};
      color: ${colors.gray5} !important;
      cursor: not-allowed;
    `;
  } else {
    return css`
      debug: RadioButton-background;
      background-color: ${colors.light};
    `;
  }
};

export const radioButtonWrapper = css`
  debug: RadioButton-wrapper;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const block = (block: boolean) => {
  if (!block) {
    return {};
  }
  return css`
    debug: RadioButton-block;
    flex: 1;
  `;
};

export const groupContainer = (block: boolean) => {
  if (!block) {
    return css`
      debug: RadioGroup-container;
      display: inline-block;
    `;
  }
  return css`
    debug: RadioGroup-container;
    display: flex;
    align-items: center;
  `;
};
