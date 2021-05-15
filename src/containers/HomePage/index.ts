import { combineReducers } from 'redux';
import HomePage from './HomePage';
import { reducerExample } from './reducers/reducerExample';
import reducerTodolist from './reducers/reducerTodolist';
import { watchTodolistRequest, watchTodolistCancel } from './sagas/watchTodolist';

const sagaHomePage = [watchTodolistRequest, watchTodolistCancel];

const reducersHomePage = combineReducers({
  todolist: reducerTodolist,
  example: reducerExample,
});

export { HomePage, reducersHomePage, sagaHomePage };
