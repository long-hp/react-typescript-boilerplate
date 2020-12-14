import { RGBColor } from 'react-color';

const rgbaStringToObject = (color: string): RGBColor => {
  const [r, g, b, a] = color.replace(/rgba\(|\)|\s+/g, '').split(',');
  return {
    r: Number(r),
    g: Number(g),
    b: Number(b),
    a: Number(a),
  };
};

export default rgbaStringToObject;
