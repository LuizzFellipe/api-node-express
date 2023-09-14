import express from 'express';
import bodyParser from 'body-parser'

import userRouter from './routes/userRouter.js';
import loginRouter from './routes/loginRouter.js';
import productRouter from './routes/productRouter.js';
import { PORT } from './config.js';

const api = express();

api.use(bodyParser.json());

api.get('/', (req, res) => {
    res.json('Bem-Vindo Usuário')
});

api.use('/user', userRouter);

api.use('/auth', loginRouter);

api.use('/product', productRouter);

api.listen(PORT, () => {
    console.log(`Servidor online 127.0.0.1:${PORT}`);
});