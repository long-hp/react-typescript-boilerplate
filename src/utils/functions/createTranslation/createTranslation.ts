import { useEffect, useState } from 'react';
import * as R from 'ramda';
import { TransitionDefault, I18n } from './types';

interface CreateTranslationInput<T extends TransitionDefault> {
  initialValue: T;
  locale: string | (() => string);
  cache?: boolean;
  request?: () => Promise<T>;
}

const createTranslation = <T extends TransitionDefault>({ initialValue, locale, cache = false, request }: CreateTranslationInput<T>) => {
  const { origin } = window.location;
  const STORAGE_KEY = `___translation_${origin}___`;
  const translationCache = localStorage.getItem(STORAGE_KEY);
  let requested = false;
  let defaultI18n = { ...initialValue };
  if (cache) {
    if (!!translationCache && translationCache.includes('{')) {
      defaultI18n = JSON.parse(translationCache);
    }
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }

  const useTranslation = () => {
    const [i18nData, setI18n] = useState(defaultI18n);
    const _locale = typeof locale === 'function' ? locale() : locale;

    useEffect(() => {
      if (!requested) {
        const getTranslation = async () => {
          if (!!request) {
            try {
              const data = await request();
              if (cache) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
              }
              setI18n(data);
            } catch {
              setI18n(defaultI18n);
            }
          }
        };
        getTranslation();
        requested = true;
      }
    }, []);

    const translation: I18n<T[keyof T]>['translation'] = (key, options) => {
      const _lang = i18nData[_locale];
      const _options = options as Record<string, string>;
      if (!_lang) {
        return '';
      }
      const value = key.includes('.') ? R.path(key.split('.'), _lang) : _lang[key as string];
      if (!_options) {
        return value;
      }
      return Object.entries(_options).reduce((acc, [prop, value]) => {
        const regex = new RegExp(`\\{\\{\\s*${prop}\\s*\\}\\}`, 'g');
        return acc.replace(regex, value);
      }, value);
    };

    return translation;
  };

  return useTranslation;
};

export default createTranslation;
