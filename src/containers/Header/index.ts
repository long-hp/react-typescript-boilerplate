import Header from './Header';
import reducerNightMode from './reducers/reducerNightMode';
import { sliceDirection } from './slice/sliceDirection';

const reducersHeader = {
  nightMode: reducerNightMode,
  direction: sliceDirection.reducer,
};

export { Header, reducersHeader };
