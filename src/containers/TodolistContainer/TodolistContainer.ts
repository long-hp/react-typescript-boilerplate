import { connect } from 'react-redux';
import { getTodolist } from 'actions/actionTodolist/actionTodolist';
import Todolist from 'components/molecules/Todolist/Todolist';

function mapStateToProps({ todolist }: AppState) {
  return {
    todolist,
  };
}

const mapDispatchToProps = {
  getTodolist,
};

export type TodolistProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
