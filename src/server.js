// const express = require('express');
import express from 'express';
import userRouter from './routes/userRouter.js';

const api = express();
const  port = 3000;

api.get('/', (req, res) => {
    res.json({message: "Aqui é o home, sera exibido a pagina para você"});
});

api.use('/user', userRouter);

api.listen(port, () => {
    console.log(`Servidor online 127.0.0.1:${port}`);
});