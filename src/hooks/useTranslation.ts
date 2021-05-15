import { defaultTranslation } from 'utils/constants/defaultTranslation';
import createTranslation from 'utils/functions/createTranslation';

const fetchFake = () => {
  return new Promise(resolve => {
    const timeoutId = setTimeout(() => {
      resolve(defaultTranslation);
      clearTimeout(timeoutId);
    }, 1000);
  });
};

const useTranslation = createTranslation({
  initialValue: defaultTranslation,
  locale: 'en',
  cache: true,
  request: async () => {
    const data = (await fetchFake()) as typeof defaultTranslation;
    return data;
  },
});

export default useTranslation;
