const express = require('express');
const cors = require('cors');
const mongo = require('./db.js');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('server is working');
});

app.get('/tasks', (req, res) => {
  let callBack = result => {
    res.json(result);
  };
  mongo.getTasks(callBack);
});

app.post('/tasks', (req, res) => {
  let newTask = req.body;
  mongo.addTask(newTask, result => {
    res.json(result);
  });
});

//Q2: we have 4 errors here please fix them
app.put('/tasks', (req, res) => {
  let id = req.params.id;
  mongo.updateTask(ID, result => {
    res.json();
  });
});

app.delete('/tasks/:id', (req, res) => {
  let id = req.params.id;
  mongo.deleteTask(id, result => {
    res.json(result);
  });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
