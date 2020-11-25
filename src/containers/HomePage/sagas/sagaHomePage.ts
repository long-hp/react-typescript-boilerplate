import { watchTodolistRequest, watchTodolistCancel } from './watchTodolist';

const sagaHomePage = [watchTodolistRequest, watchTodolistCancel];

export default sagaHomePage;
