import express from 'express';
import getProduct from '../controllers/product/getProduct.js';
import listProduct from '../controllers/product/listProduct.js';
import postProduct from '../controllers/product/postProduct.js';
import putProduct from '../controllers/product/putProduct.js';

const router = express.Router();

router.get('/produtos', getProduct);

router.get('/list', listProduct);

router.post('/cadastro', postProduct);

router.put('/atualizar', putProduct);

export default router;