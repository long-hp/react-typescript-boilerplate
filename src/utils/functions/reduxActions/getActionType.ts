export function getActionType<TAction>(
  reduxAction: (
    ...payload: any
  ) => {
    type: TAction;
  },
): TAction;

/**
 * Get action type
 * @param createAction redux action
 * @example
 * ```typescript
 * export const getArticle = createAction('GET_ARTICLE', (endpoint: string) => ({
 *  endpoint,
 * }));
 * const articleType = getActionType(getArticle);
 * ```
 * @result
 * ```typescript
 * articleType = 'GET_ARTICLE'
 * ```
 */
export function getActionType<TAction>(reduxAction: (...payload: any) => { type: TAction }): TAction {
  return reduxAction().type;
}
