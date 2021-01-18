import { css } from 'wiloke-react-core';

export const container = css`
  padding: 30px;
`;

export const icon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
`;

export const iconBackground = (iconColor: string) => css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.2;
  background-color: ${iconColor};
`;
