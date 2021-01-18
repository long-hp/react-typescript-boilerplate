import { css } from 'wiloke-react-core';

export const container = (lineSize: number, color: string, lineBottomSpace: number) => css`
  position: relative;
  top: -${lineBottomSpace}px;
  display: inline;
  border-bottom: ${lineSize}px solid ${color};
  > * {
    display: inherit;
    position: relative;
    top: ${lineBottomSpace}px;
  }
`;
