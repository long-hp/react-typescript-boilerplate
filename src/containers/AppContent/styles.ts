import { css, Theme } from 'wiloke-react-core';

export const cssGlobalWithTheme = ({ fonts, colors }: Theme) => css`
  :global {
    body {
      font-family: ${fonts.primary};
      background-color: ${colors.light};
      color: ${colors.gray7};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${fonts.secondary};
      color: ${colors.gray9};
    }
  }
`;
