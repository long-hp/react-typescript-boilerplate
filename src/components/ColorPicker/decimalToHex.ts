export const decimalToHex = (alpha: number) => (alpha === 0 ? '00' : Math.round(255 * alpha).toString(16));
