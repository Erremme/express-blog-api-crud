const express = require('express');
const prodotti = require('../data/productsData');

//index
const index = function(req, res) {

//Inizializziamo una variabile e salviamo all suo interno l array.
   let filteredProducts = prodotti

//Facciamo un controllo che verifichi che l ingrediente sia all interno dell array.   
   if (req.query.ingredienti) {
    filteredProducts = prodotti.filter(
    elm => elm.ingredienti.includes(req.query.ingredienti));
};

//Restituiamo l array sia che la condizione sia verificata o meno.
    res.json(filteredProducts)
};

//show
const show =  function(req, res) {

// Salviamo il valore numerico di id.
    const id = parseInt(req.params.id)

//Cerchiamo il prodotto all interno dell array con find.
    const prodotto = prodotti.find(elm => elm.id == id)

//Controllo per verificare che sia all interno dell array.
    if(!prodotto){
        res.sendStatus(404);
    }

//Restituiamo il prodotto che contiene lo stesso id della req.
    res.json(prodotto);
};

//store
const store =  function(req, res) {
    const id = prodotti[prodotti.length - 1].id + 1;
    const newProduct = {
        id,
        ...req.body
    }

    prodotti.push(newProduct)
    
    
    res.status(201)
    res.json(newProduct)
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

// Salviamo il valore numerico di id.
    const id = parseInt(req.params.id)

// Cerchiamo il prodotto tramite id.
    const product = prodotti.find(elm => elm.id === id);

// Controlliamo che il prodotto sia all interno del nostro array.
    if (!product) {
        res.status(404);
        return res.json({
        status: 404,
        error: "Not Found",
        message: "Prodotto non trovato"
})
}
// Rimuoviamo il prodotto dalla lista
    prodotti.splice(prodotti.indexOf(product), 1);
//Restituiamo al client il messaggio che indica che òla cancellazione è avvenuta.
    res.sendStatus(204)
};



 module.exports = { index , show, store, update, modify, destroy}

