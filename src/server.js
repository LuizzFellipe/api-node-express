import express from 'express';
import bodyParser from 'body-parser';
import corsOptions from 'cors';
import cookieParser from 'cookie-parse';

import userRouter from './routes/userRouter.js';
import loginRouter from './routes/loginRouter.js';
import productRouter from './routes/productRouter.js';
import { PORT } from './config.js';

const api = express();

var corsOptions = {
    credentials: true,
    origin: "http://1270.0..1:5173"
}

api.use(corsOptions())
api.use(bodyParser.json());
api.use(cookieParser())


api.get('/', (req, res) => {
    res.json('Bem-Vindo Usuário')
});

api.use('/user', userRouter);

api.use('/auth', loginRouter);

api.use('/product', productRouter);

api.listen(PORT, () => {
    console.log(`Servidor online 127.0.0.1:${PORT}`);
});