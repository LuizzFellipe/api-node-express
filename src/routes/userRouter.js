import express from 'express'
import getUser from '../controllers/user/getUser.js';
import postUser from '../controllers/user/insertUser.js';
import putUser from '../controllers/user/putUser.js';
import deleteUser from '../controllers/user/deleteUser.js';
import getListUser from '../controllers/user/listUser.js'

const router = express.Router();

router.get('/', getUser);
router.get('/list', getListUser);

router.post('/cadastro', postUser);

router.put('/atualizar', putUser);

router.delete('/apagar', deleteUser);

export default router; 