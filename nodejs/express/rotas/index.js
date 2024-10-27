const express = require('express');

let alunos = [
  { id: 0, nome: 'Jose'},
  { id: 1, nome: 'Maria'},
  { id: 2, nome: 'João'},
  { id: 3, nome: 'Marcos'},
]


const app = express();

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/alunos',(req, res)=> {
  res.json(JSON.stringify(alunos));
});

app.get('/aluno', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  let aluno = alunos[req.query.id]
  res.json(aluno);
});

// app.get('/aluno/:id', (req, res) => {
//   console.log(req.params.id);
//   let aluno = alunos[req.params.id]
//   res.json(aluno);
// });


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});