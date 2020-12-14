import { RGBColor } from 'react-color';

const rgbaObjectToString = (color: RGBColor) => `rgba(${color.r},${color.g},${color.b},${color.a})`;

export default rgbaObjectToString;
