import { useEffect, useState } from 'react';

export interface UseCountOptions {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
}

const useCount = ({ min = 0, max = Infinity, step = 1, value = 0 }: UseCountOptions) => {
  const [count, setCount] = useState(value);

  const _setCount = (value: number) => {
    setCount(value);
  };

  useEffect(() => {
    _setCount(value);
  }, [value]);

  const _increment = (_step = step) => {
    return _setCount(Math.min(count + _step, max));
  };

  const _decrement = (_step = step) => {
    return _setCount(Math.max(count - _step, min));
  };

  return {
    count,
    setCount: _setCount,
    increment: _increment,
    decrement: _decrement,
  };
};
export default useCount;
