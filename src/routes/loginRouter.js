import express from "express";
import login from '../controllers/cadastro/insertLogin.js';
import logout from '../controllers/cadastro/insertLogout.js';

const router = express.Router();

router.post('/login', login);

router.delete('/logout', logout);


export default router;