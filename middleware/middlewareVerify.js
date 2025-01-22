const express = require('express');

if(isNaN (req.params.id)){
    res.sendStatus(400)
 }