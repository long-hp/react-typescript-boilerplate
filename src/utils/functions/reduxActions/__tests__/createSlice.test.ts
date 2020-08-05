import { createSlice, getExtraActions, getActionsFromReducers } from '../createSlice';
import { handleAction } from '../handleAction';
import { ActionTypes, HandleAction } from '../types';
import { createAction } from '../createAction';

export type CounterState = number;
export interface IncrementAction {
  type: 'increment';
  payload: number;
}
export interface DecrementAction {
  type: 'decrement';
  payload: number;
}
export type CounterAction = IncrementAction | DecrementAction;

const actionTestExtra = createAction('TestExtra', (step: number) => ({
  step,
}));

export type OuterAction = ActionTypes<typeof actionTestExtra>;
const action: OuterAction = { type: 'TestExtra', payload: { step: 10 } };

describe('kiểm tra hàm liên quan tới createSlice', () => {
  it('trường hợp 1 reducers', () => {
    const name = 'Couter';
    const actionIncrement = {
      type: 'Couter/increment',
      payload: 10,
    };
    const actionDecrement = {
      type: 'Couter/decrement',
      payload: 20,
    };
    const counterSlice = createSlice<CounterState, CounterAction>({
      name: 'Couter',
      initialState: 0,
      reducers: [
        handleAction('increment', ({ state, action }) => {
          return state + action.payload;
        }),
        handleAction('decrement', ({ state, action }) => {
          return state - action.payload;
        }),
      ],
    });
    expect(name).toBe(counterSlice.name);
    expect(actionIncrement).toEqual(counterSlice.actions.increment(10));
    expect(actionDecrement).toEqual(counterSlice.actions.decrement(20));
  });
  it('trường hợp 2 extraReducers', () => {
    const name = 'Test2';
    const actionIncrement = {
      type: 'Test2/increment',
      payload: 30,
    };
    const actionDecrement = {
      type: 'Test2/decrement',
      payload: 40,
    };
    const actionExtra = {
      type: 'TestExtra',
      payload: {
        step: 100,
      },
    };
    const counterSlice = createSlice<CounterState, CounterAction, OuterAction>({
      name: 'Test2',
      initialState: 0,
      reducers: [
        handleAction('increment', ({ state, action }) => {
          return state + action.payload;
        }),
        handleAction('decrement', ({ state, action }) => {
          return state - action.payload;
        }),
      ],
      extraReducers: [
        handleAction('TestExtra', ({ state, action }) => {
          return state + action.payload.step;
        }),
      ],
    });
    expect(name).toBe(counterSlice.name);
    expect(actionIncrement).toEqual(counterSlice.actions.increment(30));
    expect(actionDecrement).toEqual(counterSlice.actions.decrement(40));
    expect(actionExtra).toEqual(actionTestExtra(100));
  });
  it('kiểm tra hàm getExtraActions', () => {
    const extraActionsObject: HandleAction<CounterState, OuterAction> = {
      TestExtra: ({ state, action }) => {
        return state + action.payload.step;
      },
    };
    const extraActions = getExtraActions<CounterState, OuterAction>([
      handleAction('TestExtra', ({ state, action }) => {
        return state + action.payload.step;
      }),
    ]);
    if (extraActions) {
      expect(extraActionsObject?.TestExtra?.({ state: 10, action })).toEqual(extraActions.TestExtra?.({ state: 10, action }));
    }
  });
  it('kiểm tra hàm getActionsFromReducers', () => {
    const actionIncrement = {
      type: 'Couter/increment',
      payload: 10,
    };
    const actionDecrement = {
      type: 'Couter/decrement',
      payload: 40,
    };
    const actions = getActionsFromReducers<CounterState, CounterAction>(
      [
        handleAction('increment', ({ state, action }) => {
          return state + action.payload;
        }),
        handleAction('decrement', ({ state, action }) => {
          return state - action.payload;
        }),
      ],
      'Couter',
    );
    expect(actionIncrement).toEqual(actions.increment(10));
    expect(actionDecrement).toEqual(actions.decrement(40));
  });
});
