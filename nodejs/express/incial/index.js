const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();

let consoleBody = (req, res, next) => {
  console.log(req.body);
  next();
}

let hello = (req, res, next) => {
  res.send('Hello World');
  next();
}

let fimRequisicao = (req, res) => {
  console.log('Fim')
}

app.use('/', bodyParser.json())
app.use('/', consoleBody);

app.get('/', hello);
app.get('/', fimRequisicao)

app.post('/', hello);

app.put('/atualiza', (req, res)=> {
  res.send('<h1>Hello World from Put</h1>');
});

app.delete('/', (req, res)=> {
  res.send('<h1>Hello World from Delete</h1>');
});

app.use("/meusite", express.static(path.join(__dirname, 'client')));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});