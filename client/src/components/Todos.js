import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todos extends Component {
  render() {
    const { tasks, toggleComplete, deleteItem } = this.props;
    const allTasks = tasks.map(task => <TodoItem key={task._id} task={task} toggleComplete={toggleComplete} deleteItem={deleteItem} />)
    return (
      <React.Fragment>
        <h6>Todos</h6>
        {allTasks}
      </React.Fragment>
    );
  }
}
