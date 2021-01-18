import { ColorNames, css, Theme } from 'wiloke-react-core';

export type BackgroundType = 'full' | 'left' | 'right';

export const container = css`
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
  padding-top: 40px;
  padding-bottom: 40px;
  z-index: 9;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const background = (backgroundColorNative?: string, backgroundColor?: ColorNames) => ({ colors }: Theme) => css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: 40px;
  background-color: ${!!backgroundColor ? colors[backgroundColor] : backgroundColorNative};
  @media (min-width: 992px) {
    margin: 0 15px;
  }
`;

const left = css`
  right: 60%;
`;

const right = css`
  left: 60%;
`;

export const backgroundType = (backgroundType: BackgroundType) => {
  switch (backgroundType) {
    case 'left':
      return left;
    case 'right':
      return right;
    case 'full':
    default:
      return {};
  }
};
