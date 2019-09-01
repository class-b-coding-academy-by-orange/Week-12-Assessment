import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class LifeCycle1 extends Component {
  constructor() {
    super();
    this.state = {
      title: 'lifecycle 1'
    };
  }

  changeState = () => {
    this.setState({ title: 'dont update the title' });
  };

  /*
    Q4: in this component you should didnt update:
    1- the state (title) if you click on the button Change LifeCycle state
    2- the props message if it was 'first'
    
    other than this you should update (the props message if it was 'second')
  */

  /* i want to insert if statement in the changestate function to check the value of the title and change it or not
  according to the condition in the question
  also i will check the value of the props message if it was first then i will not change the value otherwise the function should run like before
  
*/
  render() {
    return (
      <div style={{ border: 'solid 2px red' }}>
        <h6>LifeCycle 1 Component</h6>
        <button onClick={this.changeState}>Change LifeCycle state</button>
        <p>STATE TITLE: {this.state.title}</p>
        <p>PROPS MESSAGE: {this.props.message}</p>
        <p>PROPS TITLE: {this.props.title}</p>
      </div>
    );
  }
}

export default LifeCycle1;

/*
  Q5: in this component you should use props type:
  1- the props message should be a string
  2- the props title should be a string and require
*/
//  hereis the the solution for the question
// LifeCycle1.propTypes = {
//   message: propTypes.string,
//   title: propTypes.string.isReuired
// }