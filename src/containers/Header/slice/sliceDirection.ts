import { createDispatchAction, createSlice, handleAction } from 'wiloke-react-core/utils';

// Thử dùng createSlice thay cho action + reducer

export type DirectionState = 'ltr' | 'rtl';

export interface DirectionAction {
  type: 'setDirection';
  payload: {
    direction: DirectionState;
  };
}

export const sliceDirection = createSlice<DirectionState, DirectionAction>({
  name: '@Header',
  initialState: 'ltr',
  reducers: [handleAction('setDirection', ({ action }) => action.payload.direction)],
});

export const useSetDirection = createDispatchAction(sliceDirection.actions.setDirection);
