import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { _id, title, isCompleted } = this.props.task;
    const { toggleComplete, deleteItem } = this.props;

    return (
      <React.Fragment>
        <p
          style={{
            textDecoration: isCompleted ? 'line-through' : 'none'
          }}
        >
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={toggleComplete.bind(this, _id)}
          />
          {title}
          <button
            style={{ backgroundColor: 'red' }}
            onClick={deleteItem.bind(this, _id)}
          >
            X
          </button>
        </p>
      </React.Fragment>
    );
  }
}
