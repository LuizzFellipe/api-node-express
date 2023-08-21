import express from 'express'
import getUser from '../controllers/user/getUser.js';
import postUser from '../controllers/user/postUser.js';
import putUser from '../controllers/user/putUser.js';
import deleteUser from '../controllers/user/deleteUser.js';

const router = express.Router();

router.get('/', getUser);

router.post('/cadastro', postUser);

router.put('/produtos', putUser);

router.delete('/carrinho', deleteUser);

export default router;