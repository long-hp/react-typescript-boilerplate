import { useContext } from 'react';
import context from './CollapseContext';

const useCollapseContext = () => {
  const stateContext = useContext(context);
  if (!stateContext) {
    throw new Error('Collapse components are compound component. Must be used inside Collapse.');
  }
  return stateContext;
};

export default useCollapseContext;
