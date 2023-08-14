import express from 'express'
const router = express.Router();

router.post('/cadastro', (req, res) => {
    res.json({message: "Aqui é o cadastro, você coloca as informações do produtos"});
});

router.put('/produtos', (req, res) => {
    res.json({message: "Aqui é seu produto, você pode adicionar os seus produtos no carrinho"});
});

router.delete('/carrinho', (req, res) => {
    res.json({message: "Aqui é o seu carrinho, você pode apagar o seu produtos"});
});

export default router;