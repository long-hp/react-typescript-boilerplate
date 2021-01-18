import { css, Theme } from 'wiloke-react-core';

type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export const container = css`
  padding: 8px 8px 0;
  background-color: #ffffff;
  border: none !important;
  border-radius: 8px;

  z-index: 9999;
`;

export const targetPicker = css`
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 42px;
  height: 20px;
`;

export const targetBackground = css`
  width: 100%;
  height: 100%;

  &:after {
    content: '';
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==');
    position: absolute;
    background-repeat: repeat;
    background-size: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const placement = (placement: Placement) => {
  switch (placement) {
    case 'bottom':
    case 'bottom-end':
    case 'bottom-start': {
      return css`
        margin-top: 8px;
        z-index: 9999;

        &:after {
          content: '';
          display: none;
        }
      `;
    }
    case 'top':
    case 'top-end':
    case 'top-start': {
      return css`
        margin-bottom: 8px;
        z-index: 9999;

        &:after {
          content: '';
          display: none;
        }
      `;
    }
    case 'left':
    case 'left-end':
    case 'left-start': {
      return css`
        margin-right: 8px;
        z-index: 9999;

        &:after {
          content: '';
          display: none;
        }
      `;
    }
    case 'right':
    case 'right-end':
    case 'right-start': {
      return css`
        margin-left: 8px;
        z-index: 9999;
        &:after {
          content: '';
          display: none;
        }
      `;
    }
    default:
      return css`
        z-index: 9999;
        &:after {
          content: '';
          display: none;
        }
      `;
  }
};

export const loadingContainer = ({ colors }: Theme) => css`
  width: 50px;
  height: 23px;
  border-radius: 6px;
  background-color: ${colors.gray5};
`;
