import { useState } from 'react';

type StateType = boolean;

type ResolveType = (nextState: StateType) => void;

type OnToggleType = () => Promise<StateType>;

type UseToggleReturnType = [StateType, OnToggleType];

export function useToggle(initialState: StateType): UseToggleReturnType {
  const [state, setState] = useState(initialState);

  const onToggle: OnToggleType = async () => {
    const nextState = !state;
    setState(nextState);
    return new Promise((resolve: ResolveType) => {
      resolve(nextState);
    });
  };

  return [state, onToggle];
}
