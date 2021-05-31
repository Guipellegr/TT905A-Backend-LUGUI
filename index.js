const express = require("express");
const app = express();
app.use(express.json());

//Permissões
 var cors = require('cors');
 app.use(cors());

 app.listen(process.env.PORT || 3000);

 app.get('/', function (req, res){
        res.send("Hello World!");
     }
 ); 

 app.get('/', function (req, res){
        res.send("Hello denovo");
 });

const mensagens = [
    {
        nome: "Guilherme Pellegrini", banda_favorita:"Vintage Culture"
     },
     {
        nome: "Lucio Gabriel", banda_favorita:"Civilization 6"
     }
];

app.get('/mensagens', function(req, res){
        //res.send(mensagens);
        res.send(mensagens.filter(Boolean));
    } 
);
app.get('/mensagens/:id', function(req, res){
        const id = req.params.id - 1;
        const mensagem = mensagens[id];

        if (!mensagem){
            res.send("Mensagem não encontrada");
        } else {
            res.send(mensagem);
        }
    }
)

app.post('/mensagens', 
    (req, res) => {
        console.log(req.body.mensagem);
        const mensagem = req.body.mensagem;
        mensagens.push(mensagem);
        res.send("criar uma mensagem.")
    }
);

app.put('/mensagens/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const mensagem = req.body.mensagem;
        mensagens[id] = mensagem;        
        res.send("Mensagem atualizada!")
    }
)

app.delete('/mensagens/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete mensagens[id];
        res.send("Mensagem removida com sucesso");
    }
);