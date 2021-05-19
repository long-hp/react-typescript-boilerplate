export interface RGB {
  b: number;
  g: number;
  r: number;
}

function checkHex(hex: string) {
  if (hex.length === 4) {
    const [r, g, b] = hex.replace('#', '').split('');
    return `#${r}${r}${g}${g}${b}${b}`;
  }
  return hex;
}

function hexToRgb(hex: string): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(checkHex(hex)) as RegExpExecArray;
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

export default hexToRgb;
