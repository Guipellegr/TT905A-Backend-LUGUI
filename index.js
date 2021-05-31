const express = require("express");
const app = express();

//Permissões
var cors = require('cors');
app.use(cors());

app.listen(3000);

app.get('/', function (req, res){
    res.send("Hello Word");
});

app.get('/hello', function (req, res){
    res.send("Hello de novo");
});

const mensagens = [
    "Cachorro", "Gato"
];

app.get('/mensagens', function (req, res){
    res.send(mensagens);
});

app.get('/mensagens/ :id', function (req, res){
    const id = req.params.id - 1;
    const mensagem = mensagens[id];
    if(!mensagens){
        res.send("Mensagem não encontrada");
    } else{
        res.send(mensagem);
    };
});