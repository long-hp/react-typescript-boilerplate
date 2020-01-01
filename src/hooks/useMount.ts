import { useEffect, EffectCallback } from 'react';

export function useMount(effect: EffectCallback) {
  useEffect(effect, []);
}
