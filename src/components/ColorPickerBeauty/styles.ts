import { css, Theme } from 'wiloke-react-core';

export const container = css`
  position: relative;
`;

export const box = css`
  height: 46px;
`;

export const colorDetailsContainer = css`
  display: inherit;
  margin-left: 32px;
`;

export const colorDetails = ({ colors }: Theme) => css`
  font-size: 14px;
  color: ${colors.gray7};
`;

export const inner = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;

export const loadingContainer = css`
  position: relative;
  overflow: hidden;
  height: 46px;
`;

export const loadingInner = ({ colors }: Theme) => css`
  padding: 5px 10px;
  height: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  background-color: ${colors.gray5};
`;

export const loadingInnerLeft = ({ colors }: Theme) => css`
  width: 50px;
  height: 24px;
  background-color: ${colors.gray4};
  border-radius: 5px;
`;

export const loadingInnerRight = ({ colors }: Theme) => css`
  width: 100px;
  height: 4px;
  background-color: ${colors.gray4};
  border-radius: 5px;
  margin-left: 32px;
`;
