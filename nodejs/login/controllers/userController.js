const user = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function verificaEmailExistente(email){
  let usuarios = user.findAll();
  let emailEncontrado = false;
  usuarios.forEach((item) => {
    if(item.email == email){
      emailEncontrado = true;
    }
  });
  return emailEncontrado;
}

function encontraUsuario(email){
  let usuarios = user.findAll();
  let usuarioEncontrado = {};
  usuarios.forEach((user) => {
    if(user.email == email){
      usuarioEncontrado = user;
    }
  })
  return usuarioEncontrado;
}
 
const userController = {
  register: function (req,res){
    console.log('register');
    let validaEmailExistente = verificaEmailExistente(req.body.email);
    if(!validaEmailExistente){
      const newUser = user.create(req.body.id, req.body.name, req.body.email, bcrypt.hashSync(req.body.password), req.body.date, req.body.admin);
      res.send(newUser);
    } else {
      return res.status(400).send('Email existente')
    }
  },

  login: function (req, res) {
    let emailLogin = encontraUsuario(req.body.email);
    
    if(Object.keys(emailLogin).length == 0){
      return res.status(400).send('Email ou senha incorretos.');  
    } 
    const comparaSenha = bcrypt.compareSync(req.body.password, emailLogin.password);
    if(!comparaSenha){
      return res.status(400).send('Email ou senha incorreto')
    }
    const token = jwt.sign({id:emailLogin.id, admin:emailLogin.admin}, process.env.TOKEN_SECRET)
    res.header('authorization-token', token);
    res.send(emailLogin);
  }
}

module.exports = userController;