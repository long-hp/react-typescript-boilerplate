import { css, Theme } from 'wiloke-react-core';

export const container = css`
  margin-bottom: 20px;
  position: relative;
`;

export const label = css`
  line-height: 1;
  margin-bottom: 5px;
  margin-top: 0px;
`;

export const note = ({ colors }: Theme) => css`
  font-size: 12px;
  margin: 0px;
  margin-top: 3px;
  color: ${colors.gray6};
`;
