const express = require('express');
const prodotti = require('../data/productsData');

//index
const index = function(req, res) {
    res.json(prodotti);
};

//show
const show =  function(req, res) {
    const prodotto = prodotti.find(elm => elm.id == req.params.id)
    if(!prodotto){
        res.sendStatus(404)
    }
    res.json(prodotto);
};

//store
const store =  function(req, res) {
    res.send('Creazione nuovo prodotto');
 };

 //update
 const update = function(req, res){
    res.send(`Modifica integrale del prodotto ${req.params.id}`)
};

//modify
const modify = function(req,res){
    res.send(`Modifica parziale del prodotto ${req.params.id}`)
};

//delete
const destroy = function(req, res){
    res.send(`Cancellazzione del prodotto ${req.params.id}`)
};



 module.exports = { index , show, store, update, modify, destroy}

