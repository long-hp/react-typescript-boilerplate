import { css } from 'wiloke-react-core';

export const container = (size: number) => css`
  debug: Avatar-container;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${size}px;
  height: ${size}px;
`;

export const background = (backgroundColor: string) => css`
  background-color: ${backgroundColor};
`;
