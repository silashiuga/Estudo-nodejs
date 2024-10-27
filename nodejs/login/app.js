require('dotenv').config();
const express = require('express');

const app = express();

const userRouter = require('./rotas/userRouter');
const adminRouter = require('./rotas/adminRouter');

app.use('/user', express.json(), userRouter);
app.use('/admin', express.json(), adminRouter)


app.listen(process.env.PORT, ()=>{console.log("Server rodando!!")})