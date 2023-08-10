const express = require('express');
const app = express();
const port = 3000;

app.use('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello, World')
});

app.listen(3000, () => {
    console.log(`Servidor online 127.0.0.1:${port}`);
});