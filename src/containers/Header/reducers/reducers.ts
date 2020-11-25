import { sliceDirection } from '../slice/sliceDirection';
import reducerNightMode from './reducerNightMode';

const reducersHeader = {
  nightMode: reducerNightMode,
  direction: sliceDirection.reducer,
};

export default reducersHeader;
