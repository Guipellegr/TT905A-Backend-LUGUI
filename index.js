const express = require("express");
const app = express();
app.use(express.json());

//Permissões
 var cors = require('cors');
 app.use(cors());

 //Porta que estou ouvindo

 app.listen(process.env.PORT || 3000);

 app.get('/', function (req, res){
        res.send("Hello World and Vitor :)");
     }
 ); 

let mensagens = [
    {
       Nome: "Guilherme Pellegrini", Apelido: "Pelegras", Aniversario:"05/12/1998", materia_favorita:"Microcontroladores", Banda:"Vintage Culture"
    },
    {
        Nome: "Lucio Gabriel", Apelido: "Lucinho", Aniversario:"01/05/1994", materia_favorita:"Ondas Guiadas", Banda:"Mário Kart"
    }
     
];

app.get('/mensagens',
    function(req, res){
        // res.send(mensagens);
        res.send(mensagens.filter(Boolean));
    } 
);
app.get('/mensagens/:id/:n/',
    function(req,res){
        console.log("Oioio");
        let id = req.params.id - 1;
        res.send(mensagens[id][req.params.nn]);
    });

app.get('/mensagens/:id',
    function(req, res){
        let id = req.params.id - 1;
        let mensagem = mensagens[id];
        
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
        let mensagem = req.body.mensagem;
        mensagens.push(mensagem);
        res.send("criar uma mensagem.")
    }
);

app.put('/mensagens/:id',
    (req, res) => {
        let id = req.params.id - 1;
        let mensagem = req.body.mensagem;
        mensagens[id] = mensagem;        
        res.send("Mensagem atualizada com sucesso.")
    }
)

app.delete('/mensagens/:id', 
    (req, res) => {
        let id = req.params.id - 1;
        delete mensagens[id];

        res.send("Mensagem removida com sucesso");
    }
);