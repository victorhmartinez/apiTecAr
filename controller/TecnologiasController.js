const listTecnologias =require('../data/tecnologias');
 

exports.getTecnologias=(req,res)=>{
    res.status(200).json(listTecnologias);
}
