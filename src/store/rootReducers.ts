import { reducersHeader } from 'containers/Header';
import { reducersHomePage } from 'containers/HomePage';

const reducers = {
  homePage: reducersHomePage,
  ...reducersHeader,
};

export default reducers;
