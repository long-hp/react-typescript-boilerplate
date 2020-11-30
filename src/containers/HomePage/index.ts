import HomePage from './HomePage';
import reducerTodolist from './reducers/reducerTodolist';
import { watchTodolistRequest, watchTodolistCancel } from './sagas/watchTodolist';

const sagaHomePage = [watchTodolistRequest, watchTodolistCancel];

const reducersHomePage = {
  todolist: reducerTodolist,
};

export { HomePage, reducersHomePage, sagaHomePage };
