import express from 'express';
import login from '../controllers/cadastro/login.js';
import loginToken from '../controllers/cadastro/loginToken.js';
import logout from '../controllers/cadastro/logout.js';

const router = express.Router()

router.post('/login', login)
router.get('/login-token', loginToken)
router.delete('/logout', logout)

export default router;