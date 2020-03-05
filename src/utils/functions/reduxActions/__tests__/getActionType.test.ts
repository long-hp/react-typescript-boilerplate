import { getActionType } from '../getActionType';
import { createAction } from '../createAction';

describe('kiểm tra hàm getActionType', () => {
  test('trường hợp không có callback', () => {
    const received = 'ACTION_TYPE';
    const action = createAction('ACTION_TYPE');
    const expected = getActionType(action);

    expect(received).toBe(expected);
  });
  test('trường hợp có callback', () => {
    const received = 'FOO_TYPE';
    const action = createAction('FOO_TYPE', (url: string) => ({
      url,
    }));
    const expected = getActionType(action);

    expect(received).toBe(expected);
  });
});
