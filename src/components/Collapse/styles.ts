import { css } from 'wiloke-react-core';

export const container = (activePanel: boolean) => css`
  min-height: 46px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: ${activePanel ? 16 : 0}px;
  margin-bottom: 8px;
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

export const headerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const headerPanel = css`
  height: 46px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const headerText = css`
  font-size: 14px;
`;

export const headerIcon = css`
  transition: 0.2s all ease;
  > * {
    transition: 0.2s all ease;
  }
`;

export const panelContainer = (activePanel: boolean) => css`
  display: ${!activePanel ? 'none' : 'block'};
  padding: 6px;
  transition: 280ms cubic-bezier(0.4, 0, 0.2, 1);
`;
