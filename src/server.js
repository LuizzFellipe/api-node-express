// const express = require('express');
import express from 'express';
import userRouter from './routes/userRouter.js';
import loginRouter from './routes/loginRouter.js';

const api = express();
const  port = 3000;

api.use('/user', userRouter);

api.use('/auth',loginRouter);

api.listen(port, () => {
    console.log(`Servidor online 127.0.0.1:${port}`);
});