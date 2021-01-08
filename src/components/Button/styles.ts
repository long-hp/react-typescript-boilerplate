import { css, Size } from 'wiloke-react-core';

interface StypeMapping {
  fontSize: number;
  paddingVertical: number;
  paddingHorizontal: number;
}

const getSizeStyleMapping = (borderWidth: number): Record<Size, StypeMapping> => {
  return {
    'extra-small': {
      fontSize: 12,
      paddingHorizontal: 8 - borderWidth,
      paddingVertical: 15 - borderWidth,
    },
    small: {
      fontSize: 14,
      paddingHorizontal: 12 - borderWidth,
      paddingVertical: 18 - borderWidth,
    },
    medium: {
      fontSize: 15,
      paddingHorizontal: 13 - borderWidth,
      paddingVertical: 22 - borderWidth,
    },
    large: {
      fontSize: 16,
      paddingHorizontal: 20 - borderWidth,
      paddingVertical: 38 - borderWidth,
    },
  };
};

export const container = (borderWidth: number, size: Size) => css`
  display: inline-block;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  appearance: none;
  line-height: 1.5;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: ${getSizeStyleMapping(borderWidth)[size].fontSize}px;
  padding: ${getSizeStyleMapping(borderWidth)[size].paddingHorizontal}px ${getSizeStyleMapping(borderWidth)[size].paddingVertical}px;
`;

export const loading = css`
  vertical-align: middle;
  margin-right: 8px;
  * {
    color: inherit !important;
  }
`;

export const text = css`
  vertical-align: middle;
`;

export const block = css`
  width: 100%;
`;

export const disabled = css`
  opacity: 0.4;
  cursor: no-drop;
`;
