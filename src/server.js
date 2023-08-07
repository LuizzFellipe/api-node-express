const express = require('express');
const api = express();
const  port = 3000;

api.get('/', (req, res) => {
    res.json({message: "Hello World"});
});

api.listen(port, () => {
    console.log(`Servidor online 127.0.0.1:${port}`);
});