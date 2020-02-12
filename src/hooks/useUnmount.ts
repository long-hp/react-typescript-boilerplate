import { useRef } from 'react';
import { useMount } from 'hooks/useMount';

export const useUnmount = (fn: () => any): void => {
  const fnRef = useRef(fn);

  // update the ref each render so if it change the newest callback will be invoked
  fnRef.current = fn;

  useMount(() => () => fnRef.current());
};
