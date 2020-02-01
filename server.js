const express = require('express');
const app = express();
const cors = require('cors');


let todos = [];
let id = 1;
let port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/todos', (req,res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {  
  let data = {    
    ...req.body,  
    id: id++
  }
  todos.push(data);
  res.json(data);
});

app.delete('/api/todos/:id', (req, res) => {
  let index = todos.findIndex(item => item.id === req.query.id);
  todos.splice(index, 1);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log('App is started at port ' + port);
});