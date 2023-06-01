const express = require('express');
const { MongoServerClosedError } = require('mongodb');
const mongoose = require('mongoose');


const app = express();
const port = 2000;
//configuração da conexão com o banco de dados
Mongoose.connect('mongodb://localhost/lidia',{useNewUrlParser:true,useUnifieldTopology:true})
.then(() => {
    console.log("conectado ao banco de dados");
})
.catch ((error) => {
    console.error("erro ao conectar ao banco de dados:", error);
});
app.get('/',(req,res) => {
    res,send("API funcionando!");
});
app.listen(port, () => {
    console.log("servidor rodando em http://localhost:${port");
})

const mongoose= require('mongoose');
const userSchema = new MongoServerClosedError.Schema({
    name: String,
    email:String,
});
 const user =mongoose.model('User',userSchema);

