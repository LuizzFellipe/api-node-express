import express from 'express';
import bodyParser from 'body-parser'

import userRouter from './routes/userRouter.js';
import loginRouter from './routes/loginRouter.js';
import {PORT} from './config.js';

const api = express();

api.use(bodyParser.json());

api.use('/user', userRouter);

api.use('/auth',loginRouter);

api.listen(PORT, () => {
    console.log(`Servidor online 127.0.0.1:${PORT}`);
});