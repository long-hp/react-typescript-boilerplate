import { css, Theme } from 'wiloke-react-core';

export type Size = 'small' | 'medium' | 'large';

const inputSizeMapping: Record<Size, number> = {
  small: 28,
  medium: 37,
  large: 46,
};

export const container = (size: Size, block: boolean, disabled: boolean) => css`
  margin: 0;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  display: ${!block ? 'inline-block' : 'block'};
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  opacity: ${disabled ? 0.4 : 1};
  height: ${inputSizeMapping[size]}px;
`;

export const input = (size: Size) => css`
  display: block;
  background-color: transparent;
  border: none;
  box-shadow: none;
  width: 100%;
  height: 100%;
  padding: 0px ${size === 'small' ? 10 : 12}px;

  &:focus {
    outline: none;
  }
`;

export const loadingContainer = ({ colors }: Theme) => css`
  width: 200px;
  height: 46px;
  border-radius: 6px;
  background-color: ${colors.gray5};
  position: relative;
`;

export const loadingInner = ({ colors }: Theme) => css`
  position: absolute;
  width: 40%;
  background-color: ${colors.gray4};
  height: 4px;
  border-radius: 4px;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;
