import { handleAction } from '../handleAction';
import { handleActions } from '../handleActions';
import { createReducer } from '../createReducer';
import { getObjectFromHandleActions } from '../getObjectFromHandleActions';
import { HandleAction } from '../types';

interface State {
  action1?: {
    name: string;
    age: number;
  };
  action2?: {
    username: string;
    avatar: string;
  };
}
interface Action1 {
  type: 'ACTION_TYPE';
  payload: {
    name: string;
    age: number;
  };
}
interface Action2 {
  type: 'ACTION_TYPE2';
  payload: {
    username: string;
    avatar: string;
  };
}
type Action = Action1 | Action2;

const state: State = {};
const action1: Action1 = { type: 'ACTION_TYPE', payload: { name: 'name test', age: 1988 } };
const action2: Action2 = { type: 'ACTION_TYPE2', payload: { username: 'wiloke', avatar: 'wiloke.png' } };

describe('kiểm tra các hàm liên quan tới reducer', () => {
  test('kiểm tra hàm handleAction', () => {
    const received = {
      ACTION_TYPE: (state: State, action: Action1): State => ({
        ...state,
        action1: action.payload,
      }),
    };
    const expected = handleAction<State, Action1, Action1['type']>('ACTION_TYPE', (state, action) => ({
      ...state,
      action1: action.payload,
    }));

    expect(received.ACTION_TYPE(state, action1)).toEqual(expected.ACTION_TYPE(state, action1));
  });

  test('kiểm tra hàm handleActions', () => {
    const received = {
      ACTION_TYPE: (state: State, action: Action1) => ({
        ...state,
        action1: action.payload,
      }),
      ACTION_TYPE2: (state: State, action: Action2) => ({
        ...state,
        action2: action.payload,
      }),
    };
    const expected = handleActions<State, Action, Action['type']>(['ACTION_TYPE', 'ACTION_TYPE2'], (state, action) => ({
      ...state,
      ...(action.type === 'ACTION_TYPE' ? { action1: action.payload } : { action2: action.payload }),
    }));
    expect(received.ACTION_TYPE(state, action1)).toEqual(expected['ACTION_TYPE,ACTION_TYPE2'](state, action1));
    expect(received.ACTION_TYPE2(state, action2)).toEqual(expected['ACTION_TYPE,ACTION_TYPE2'](state, action2));
  });

  test('kiểm tra hàm getObjectFromHandleActions', () => {
    const received: HandleAction<State, Action> = {
      ACTION_TYPE: (state, action) => ({
        ...state,
        action1: action.payload,
      }),
      ACTION_TYPE2: (state, action) => ({
        ...state,
        action2: action.payload,
      }),
    };
    const expected = getObjectFromHandleActions<State, Action>([
      handleAction('ACTION_TYPE', (state, action) => ({
        ...state,
        action1: action.payload,
      })),
      handleAction('ACTION_TYPE2', (state, action) => ({
        ...state,
        action2: action.payload,
      })),
    ]);

    expect(received?.ACTION_TYPE?.(state, action1)).toEqual(expected?.ACTION_TYPE?.(state, action1));
    expect(received?.ACTION_TYPE2?.(state, action2)).toEqual(expected?.ACTION_TYPE2?.(state, action2));
  });

  test('kiểm tra hàm createReducer với sử dụng object action', () => {
    const initialState: State = {};
    const received = (state = initialState, action: Action) => {
      switch (action.type) {
        case 'ACTION_TYPE':
          return {
            ...state,
            action1: action.payload,
          };
        case 'ACTION_TYPE2':
          return {
            ...state,
            action2: action.payload,
          };
      }
    };
    const expected = createReducer<State, Action>(initialState, {
      ACTION_TYPE: (state, action) => ({
        ...state,
        action1: action.payload,
      }),
      ACTION_TYPE2: (state, action) => ({
        ...state,
        action2: action.payload,
      }),
    });

    expect(received(state, action1)).toEqual(expected(state, action1));
    expect(received(state, action2)).toEqual(expected(state, action2));
  });

  test('kiểm tra hàm createReducer sử dụng với handleAction và handleActions', () => {
    const initialState: State = {};
    const received = (state = initialState, action: Action) => {
      switch (action.type) {
        case 'ACTION_TYPE':
          return {
            ...state,
            action1: action.payload,
          };
        case 'ACTION_TYPE2':
          return {
            ...state,
            action2: action.payload,
          };
      }
    };
    // sử dụng với handleAction
    const expected = createReducer<State, Action>(initialState, [
      handleAction('ACTION_TYPE', (state, action) => ({
        ...state,
        action1: action.payload,
      })),
      handleAction('ACTION_TYPE2', (state, action) => ({
        ...state,
        action2: action.payload,
      })),
    ]);
    // sử dụng với handleActions
    const expected2 = createReducer<State, Action>(initialState, [
      handleActions(['ACTION_TYPE', 'ACTION_TYPE2'], (state, action) => ({
        ...state,
        ...(action.type === 'ACTION_TYPE' ? { action1: action.payload } : { action2: action.payload }),
      })),
    ]);

    expect(received(state, action1)).toEqual(expected(state, action1));
    expect(received(state, action2)).toEqual(expected(state, action2));
    expect(received(state, action1)).toEqual(expected2(state, action1));
    expect(received(state, action2)).toEqual(expected2(state, action2));
  });
});
