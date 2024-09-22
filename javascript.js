const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Rota para criar um novo post
app.post('/posts', (req, res) => {
    const post = req.body;
    // Aqui você salvaria o post no banco de dados
    res.status(201).send(post);
});

// Rota para listar posts
app.get('/posts', (req, res) => {
    // Aqui você buscaria os posts do banco de dados
    res.send([/* lista de posts */]);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

