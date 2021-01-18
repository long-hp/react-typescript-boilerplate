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
  display: ${!block ? 'inline-block' : 'block'};
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  height: ${inputSizeMapping[size]}px;
  opacity: ${disabled ? 0.4 : 1};
  position: relative;
  overflow: hidden;
`;

export const input = (size: Size) => css`
  display: block;
  background-color: transparent;
  border: none;
  box-shadow: none;
  width: 100%;
  height: 100%;
  padding-right: ${size === 'small' ? 20 : 30}px;
  padding-left: 12px;
  padding-top: ${size === 'small' ? 12 : 14}px;
  padding-bottom: ${size === 'small' ? 12 : 14}px;

  &:focus {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    opacity: 0;
    cursor: pointer;
  }
`;

export const actions = css`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;

export const actionsContainer = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const actionIncre = ({ colors }: Theme) => css`
  cursor: pointer;
  display: flex;
  align-items: center;
  line-height: 1;
  flex: 0 0 50%;
  border-left: 1px solid ${colors.gray5};
  border-bottom: 1px solid ${colors.gray5};
`;

export const icon = (size: Size) => css`
  padding: ${size === 'small' ? 0 : size === 'medium' ? 3 : size === 'large' ? 5 : 0}px;
  font-size: 14px;
`;

export const actionDecre = ({ colors }: Theme) => css`
  cursor: pointer;
  display: flex;
  align-items: center;
  line-height: 1;
  flex: 0 0 50%;
  border-left: 1px solid ${colors.gray5};
`;

export const loadingContainer = ({ colors }: Theme) => css`
  width: 60px;
  height: 28px;
  background-color: ${colors.gray5};
  border-radius: 5px;
`;
