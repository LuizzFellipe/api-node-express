// const express = require('express');
import express from 'express';
import userRouter from './routes/userRouter.js';
import loginRouter from './routes/loginRouter.js';
import {PORT} from './config.js';

const api = express();

api.use('/user', userRouter);

api.use('/auth',loginRouter);

api.listen(PORT, () => {
    console.log(`Servidor online 127.0.0.1:${PORT}`);
});