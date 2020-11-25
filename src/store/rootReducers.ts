import reducersHeader from 'containers/Header/reducers/reducers';
import reducersHomePage from 'containers/HomePage/reducers/reducers';

const reducers = {
  ...reducersHomePage,
  ...reducersHeader,
};

export default reducers;
