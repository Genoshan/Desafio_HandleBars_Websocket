//CLIENTE
import * as fs from 'fs';

const socket = io();

// const input = document.getElementById('textbox');
// const log = document.getElementById('log');

// input.addEventListener('keyup', evt =>{
//     const {key} =evt;
//     evt.target.value = " ";
//     socket.emit('message1', key)
// })

// socket.on('log', data =>{
//     log.innerHTML+=data;
    
// })


// const input = document.getElementById('textbox');
// const log = document.getElementById('log');

// input.addEventListener('keyup', evt =>{
//     if (evt.key === "Enter") {
//         socket.emit('message2', input.value);
//         input.value = " ";        
//     }
// })

//const express = require('express');
//const router = express.Router();
//const fs = require('fs');

socket.on('log', data =>{
    let logs = ' ';
    data.logs.forEach( log => {
        logs += `${log.socketId} dice: ${log.message} <br/>`
    });
    log.innerHTML+=logs;
})

// Ruta para mostrar todos los productos
router.get('/', (req, res) => {
    fs.readFile('products.json', 'utf-8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo JSON', err);
        return res.status(500).send('Error al leer los productos');
      }
      
      const products = JSON.parse(data);
      res.render('home', { products: products });
    });
  });
  
  // Exportar el enrutador
  module.exports = router;
