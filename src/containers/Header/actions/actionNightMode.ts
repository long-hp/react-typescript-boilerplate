import { createAction, createDispatchAction } from 'wiloke-react-core/utils';

export const actionSetNightMode = createAction('@Header/setNightMode', (nightMode: boolean) => ({
  nightMode,
}));

export const useSetNightMode = createDispatchAction(actionSetNightMode);
