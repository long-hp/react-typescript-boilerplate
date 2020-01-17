import { connect } from 'react-redux';
import { getTodolist } from 'store/actions/actionTodolist/actionTodolist';
import Todolist from 'components/Todolist/Todolist';

function mapStateToProps({ todolist }: AppState) {
  return {
    todolist,
  };
}

const mapDispatchToProps = {
  getTodolistRequest: getTodolist.request,
};

export type TodolistProps = Connect<typeof mapStateToProps, typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
