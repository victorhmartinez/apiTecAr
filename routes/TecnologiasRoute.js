//Definicion de rutas
const  express=require('express');
const router=express.Router();
const tecnologiasController= require('../controller/TecnologiasController');
//Rutas get para obtener el listado de tecnologias
router.get('/tecnologias',tecnologiasController.getTecnologias);
module.exports=router;