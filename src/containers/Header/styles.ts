import { css } from 'wiloke-react-core';

export const inner = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const link = css`
  margin-left: 5px;
  margin-right: 5px;
  @media (min-width: 768px) {
    margin-left: 15px;
    margin-right: 15px;
  }
  a {
    text-decoration: none;
  }
`;
