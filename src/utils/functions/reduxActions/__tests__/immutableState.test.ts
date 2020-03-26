import { immutableState } from '../immutableState';

describe('kiểm tra hàm immutableState', () => {
  test('trường hợp state là array', () => {
    const received = [1, 2, 3];
    const expected = immutableState(received);
    expect(received).toEqual(expected);
    expected.push(4);
    expect([...received, 4]).toEqual(expected);
    const newExpected = expected.concat([5, 6]);
    expect([...received, 4, 5, 6]).toEqual(newExpected);
  });
  test('trường hợp state là object', () => {
    const received = {
      name: 'Foo',
      age: 2000,
    };
    const expected = immutableState(received);
    expect(received).toEqual(expected);
    expected.age = 2020;
    expect({ ...received, age: 2020 }).toEqual(expected);
  });
  test('trường hợp state là value: number, string, null, undefined...', () => {
    let received: number | string | null | undefined = null;
    let expected: number | string | null | undefined = immutableState(received);
    expect(received).toBe(expected);
    expected = undefined;
    received = undefined;
    expect(received).toBe(expected);
    expected = 2;
    received = 2;
    expect(received).toBe(expected);
    expected = 'test';
    received = 'test';
    expect(received).toBe(expected);
  });
});
