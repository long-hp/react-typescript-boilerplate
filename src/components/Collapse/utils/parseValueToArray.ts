export const parseValueToArray = (value: string | string[]) => {
  let currentValue = value;
  if (!Array.isArray(currentValue)) {
    currentValue = currentValue ? [currentValue] : [];
  }
  return currentValue.map(item => String(item));
};
