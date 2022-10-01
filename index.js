//Importamos express para crear nuestro server
const express = require('express');
// Modulo para poder interactuar con el body
//const body_parser = require('body-parser');
//servidor
const app = express();
app.use(express.json());
//app.use(body_parser.urlencoded({extended:true}));

//Rutas
app.use('/tecnologias',require('./routes/TecnologiasRoute'))
app.use('',require('./routes/TecnologiasRoute'))
  // iniciamos el  server
app.listen(3000, () => {
    console.log('listening on port 3000');
  });