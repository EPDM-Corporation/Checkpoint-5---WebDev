const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {v4:uuid} = require('uuid');

const app = express();

const Port = 3000;

app.use(cors());
app.use(bodyParser.json());

let bikes = []

//CREATE
app.post('/bikes', (req,res)=>{
    const {modelo,descricao,preco} = req.body;
    if(!modelo || !descricao || !preco){
        return res.status(400).json({error:"Campos Obrigatórios"});
    }
    const novoItem = {id:uuid(), modelo, descricao,preco};
    bikes.push(novoItem);
    res.status(201).json(novoItem);
})

//READ
app.get('/bikes',(req,res)=>{
    res.json(bikes)
})

//UPDATE
app.put('/bikes/:id',(req,res)=>{
    const bikeId = req.params.id;
    const { modelo, descricao, preco} = req.body;
    if(!modelo || !descricao || !preco){
        return res.status(404).json({error:"O campo é obrigatório"});
    }
    const bikeIndex = bikes.findIndex(item => item.id === bikeId);
    if(bikeIndex === -1){
        return res.status(404).json({error:"Bike não foi encontrada"});
    }
    bikes[bikeIndex] = {id: bikeId, modelo, descricao, preco};
    res.json(bikes[bikeIndex]);
})

//DELETE
app.delete('/bikes/:id',(req,res)=>{
    const bikeId = req.params.id;
    const inicioBike = bikes.length;
    bikes = bikes.filter(item => item.id !== bikeID);
    if (bikes.length === inicioBike){
        return res.status(404).json({error:"Bike não foi encontrada"})
    }
    res.status(204).send();
})

app.listen(Port,()=>{
    console.log(`Servidor Rodando na porta ${Port}`)
})