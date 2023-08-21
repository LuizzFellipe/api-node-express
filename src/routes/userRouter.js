import express from 'express'
import getUser from '../controllers/user/getUser.js';
import postUser from '../controllers/user/insertUser.js';
import putUser from '../controllers/user/putUser.js';
import deleteUser from '../controllers/user/deleteUser.js';
import getProduct from '../controllers/product/getProduct.js';

const router = express.Router();

router.get('/', getUser);
router.get('/produtos', getProduct);

router.post('/cadastro', postUser);

router.put('/itens', putUser);

router.delete('/carrinho', deleteUser);

export default router;