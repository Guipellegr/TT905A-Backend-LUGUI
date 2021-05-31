const express = require('express');
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
        res.send("Hello denovo!");
 });

const festas = [
    {nome: "TUSCA", organizador:"UFSCAR e USP São Carlos"},
    {nome: "Amnésia", orgnizador:"AAAMEC UNICAMP"},
    {nome: "Espuma", orgnizador:"AAAXO UNICAMP Limeira"},
    {nome: "Semáforo", orgnizador:"AAAETA UNICAMP Limeira"},
]

app.get('/festas', function(req, res){
        //res.send(mensagens);
        res.send(festas.filter(Boolean));
    } 
);
app.get('/festas/:id', function(req, res){
        const id = req.params.id - 1;
        const festa = festas[id];

        if (!festa){
            res.send("Festa não encontrada!");
        } else {
            res.send(festa);
        }
    }
);

app.post('/festas', 
    (req, res) => {
        console.log(req.body.festa);
        const festa = req.body.festa;
        festas.push(festa);
        res.send("Criar festa!")
    }
);

app.put('/festas/:id',
    (req, res) => {
        const id = req.params.id - 1;
        console.log(req.body.festa);
        const festa = req.body.festa;
        festas[id] = festa;        
        res.send("Festa atualizada!")
    }
);

app.delete('/festas/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete festas[id];
        res.send("Festa removida!");
    }
);