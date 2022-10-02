//Importamos express para crear nuestro server
const express = require('express');
//Middleware
var cors = require('cors')
//servidor
const app = express();
//Activamos el middleware de cors
app.use(cors())
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