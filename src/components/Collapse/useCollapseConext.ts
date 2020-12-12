import { useContext } from 'react';
import { CollapseStateContext } from './CollapseConext';

const useCollapseContext = () => {
  const stateContext = useContext(CollapseStateContext);
  console.log(stateContext);
};

export default useCollapseContext;
