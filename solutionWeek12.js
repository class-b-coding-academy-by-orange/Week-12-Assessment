//Q1: client/App.js {4 pt}
//Q1:we have an error here figure it out
addTodoItem = (newTask, cb) => {
  // get should be post [1 pt]
  axios
    // should the path end with tasks not task [1 pt]
    .post('http://localhost:9000/tasks', newTask)
    .then(res => {
      // tasks should be equal res.data [1 pt]
      const tasks = res.data;
      // should use setState and inside it tasks:tasks or tasks only[1 pt]
      this.setState({ tasks: tasks });
      //this also correct
      this.setState({ tasks });
    })
    .catch(error => {
      console.log(error);
    });
  cb();
};

//Q2: Server.js {4 pt}
//Q2:we have errors here please fix them
// post should be put [1 pt]
// should add /:id params [1 pt]
app.put('/tasks/:id', (req, res) => {
  let id = req.params.id;
  //ID should be id (not a capital letter) or the name varible line 28 [1 pt]
  mongo.updateTask(id, result => {
    //should pass result to res.json method [1 pt]
    res.json(result);
  });
});

// Q3: db.js {4 pt}
//Q3:we have 4 errors here please fix them
let deleteTask = (id, cb) => {
  //tasks should be Tasks [1 pt]
  // ID should be _id [1 pt]
  // cb should be id [1 pt]
  Tasks.deleteOne({ _id: id }, (err, result) => {
    if (err) {
      cb(err);
    } else {
      //should pass cb to getTasks function [1 pt]
      getTasks();
    }
  });
};

// Q4: LifeCycle.js {4 pt}
//should use shouldComponentUpdate and pass prop then state [1 pt]
shouldComponentUpdate(props, state) {
  //should write if statment like this and return false [1 pt]
  if (state.title === 'dont update the title') {
    return false;
  }
  //should write if statment like this and return false [1 pt]
  if (props.message === 'first') {
    return false;
  //should have else statment like this and return true [1 pt]
  } else {
    return true;
  }
}

/*
Q4: in this component you should didnt update:
1- the state (title) if you click on the button Change LifeCycle state
2- the props message if it was 'first'

other than this you should update (the props message if it was 'second', or the title that come from the props)
*/

// Q5: LifeCycle.js  PropTypes{4 pt}
// should import PropTypes liek this [1 pt]
import PropTypes from 'prop-types';

// should use the name of the component with propTypes small letter liek this [1 pt]
LifeCycle1.propTypes = {
// should write key messege then PropTypes.string [1 pt]
  message: PropTypes.string,
// should write key title then PropTypes.string and .isRequired [1 pt]
  title: PropTypes.string.isRequired
};

/*
Q5: in this component you should use props type:
1- the props message should be a string
2- the props title should be a string and require
*/