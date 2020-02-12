import { useState, useCallback, useEffect, useRef } from 'react';
import { includes, equals } from 'ramda';

export type OnResultSelectList<ItemT> = (outputResult: ItemT[]) => void;

export interface UseSelectListCallbackParams<ItemT = any> {
  inputResult?: ItemT[];
  multiple?: boolean;
  onResultCallback?: OnResultSelectList<ItemT>;
}

export function useSelectList<ItemT = any>({ inputResult = [], multiple = false, onResultCallback = () => {} }: UseSelectListCallbackParams<ItemT>) {
  const [outputResult, setResult] = useState<ItemT[]>([]);
  const inputResultRef = useRef(inputResult);
  const onResultCallbackRef = useRef(onResultCallback);

  const setInputResult = useCallback(() => {
    // giá trị default nếu không phải dạng multiple thì chỉ có 1 phần tử đầu tiên
    const nextOutputResult = multiple ? inputResultRef.current : [inputResultRef.current[0]];
    setResult(nextOutputResult);
    onResultCallbackRef.current?.(nextOutputResult);
  }, [multiple]);

  useEffect(() => {
    setInputResult();
  }, [setInputResult]);

  const onSelect = useCallback(
    (item: ItemT) => {
      const removeItem = outputResult.filter(_item => !equals(_item, item));
      const addItem = multiple ? [...outputResult, item] : [item];
      const nextOutputResult = includes(item, outputResult) ? removeItem : addItem;
      setResult(nextOutputResult);
      onResultCallback?.(nextOutputResult);
    },
    [outputResult, multiple, onResultCallback],
  );

  const isSelected = (item: ItemT) => includes(item, outputResult);

  const getNumberSelected = (item: ItemT) => outputResult.findIndex(_item => equals(_item, item)) + 1;

  return { outputResult, isSelected, getNumberSelected, onSelect, onPrevious: setInputResult };
}
