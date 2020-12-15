import { useContext } from 'react';
import { CollapseStateContext } from '../context/CollapseContext';

export const useCollapseState = () => {
  const state = useContext(CollapseStateContext);
  if (state === undefined) {
    throw new Error('useCollapseState phải được dùng bên trong CollapseStateProvider');
  }
  return state;
};
