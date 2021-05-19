import { createAction, createDispatchAction } from 'wiloke-react-core/utils';

export const actionExample = createAction('@HomePage/actionExample');

export const useActionExample = createDispatchAction(actionExample);
