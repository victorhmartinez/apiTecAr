//Importamos express para crear nuestro server
const express = require('express');
// Modulo para poder interactuar con el body
//const body_parser = require('body-parser');
//servidor
const app = express();
app.use(express.json());
//app.use(body_parser.urlencoded({extended:true}));
app.set('port',process.env.PORT || 3000);
//Rutas
app.use('/tecnologias',require('./routes/TecnologiasRoute'))
app.use('',require('./routes/TecnologiasRoute'))
  // iniciamos el  server
  app.listen(app.get('port'),()=>{
    console.log('Server on port '+app.get('port'));
})