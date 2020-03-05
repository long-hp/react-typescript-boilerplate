import { createAction } from '../createAction';

type Endpoint = string;
interface Params {
  q: string;
}

describe('kiểm tra createAction trả về kết quả tương đương với action mặc định', () => {
  test('trường hợp chỉ có type', () => {
    const actionType = '@getArticles';
    const received = () => ({
      type: actionType,
    });
    const expected = createAction(actionType);
    expect(received()).toEqual(expected());
  });

  test('trường hợp có callback', () => {
    const actionType = '@search';
    const endpoint: Endpoint = 'search';
    const params: Params = {
      q: 'test',
    };
    const received = (endpoint: Endpoint, params: Params) => ({
      type: actionType,
      payload: {
        endpoint,
        params,
      },
    });
    const expected = createAction(actionType, (endpoint: Endpoint, params: Params) => ({
      endpoint,
      params,
    }));
    expect(received(endpoint, params)).toEqual(expected(endpoint, params));
  });
});
