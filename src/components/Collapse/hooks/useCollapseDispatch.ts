import { useContext } from 'react';
import { CollapseDispatchContext } from '../context/CollapseContext';

export const useCollapseDispatch = () => {
  const action = useContext(CollapseDispatchContext);
  if (action === undefined) {
    throw new Error('useCollapseDispatch phải được dùng bên trong CollapseDispatchProvider');
  }
  return action;
};
