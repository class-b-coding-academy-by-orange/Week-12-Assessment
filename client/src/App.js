import React, { Component } from 'react';
import axios from 'axios';
import AddTodoItem from './components/AddTodoItem';
import Todos from './components/Todos';
import LifeCycle1 from './components/LifeCycle1';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      message: 'message from app component',
      title: 'title from app component'
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:9000/tasks')
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });
      })
      .catch(error => {
        console.log(error);
      });
  }

  //Q1: we have 4 errors here please fix them
  addTodoItem = (newTask, cb) => {
    axios
      .post('http://localhost:9000/tasks', newTask)
      .then(res => {
        const tasks = res.data;
        this.setState.task({ tasks });
      })
      .catch(error => {
        console.log(error);
      });
    cb();
  };

  toggleComplete = (id) => {
    axios
      .put(`http://localhost:9000/tasks/${id}`)
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteItem = id => {
    axios
      .delete(`http://localhost:9000/tasks/${id}`)
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });
      })
      .catch(error => {
        console.log(error);
      });
  };

  changeMessege1 = () => {
    this.setState({ message: 'first' });
  };

  changeMessege2 = () => {
    this.setState({ message: 'second' });
  };

  changeTitle = () => {
    this.setState({ title: 'new title' });
  };

  render() {
    const { addTodoItem, toggleComplete, deleteItem } = this;
    const { tasks, message, title } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.changeMessege1}>Change messege 1 </button>
        <button onClick={this.changeMessege2}>Change messege 2</button>
        <button onClick={this.changeTitle}>Change title</button>
        <br />
        <LifeCycle1 message={message} title={title} />
        <br />
        <AddTodoItem addTodoItem={addTodoItem} />
        <Todos
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
        />
      </React.Fragment>
    );
  }
}
