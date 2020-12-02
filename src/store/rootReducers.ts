import { reducersHeader } from 'containers/Header';
import { reducersHomePage } from 'containers/HomePage';

const reducers = {
  ...reducersHomePage,
  ...reducersHeader,
};

export default reducers;
