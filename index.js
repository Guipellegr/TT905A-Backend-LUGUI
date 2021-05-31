const express = require("express");
const app = express();

//Permissões
var cors = require('cors');
app.use(cors());

app.listen(3000);

app.get('/', function (req, res){
    res.send("Hello Word");
});