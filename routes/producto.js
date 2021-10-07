const express = require('express');
const router = express.Router();
const config = require('../config/config')
const factory = require('../factory');
router.get('/productos/listar', async (req, res) => {
    let producto = req.body;
    const persistenacia = tipoDePersistenacia(producto.tipo)
    let {prductos} = persistenacia
        let prodRes = await prductos.buscar();
        res.json(prodRes);
    
});
router.get('/productos/listar/:id', async (req, res) => {
    let { id } = req.params;
    let producto = req.body;
    const persistenacia = tipoDePersistenacia(producto.tipo)
    let {prductos} = persistenacia
    let prodRes = await prductos.buscarPorId(id);
    res.json(prodRes);
    
});



router.post('/productos/guardar',permisoAdministrador , (req, res) => {
    let producto = req.body;
    const persistenacia = tipoDePersistenacia(producto.tipo)
    let {prductos} = persistenacia
    console.log(producto)
    res.json(prductos.guardar(producto));
});

router.put('/productos/actualizar/:id', permisoAdministrador ,(req, res) => {
    let { id } = req.params
    let producto = req.body
    const persistenacia = tipoDePersistenacia(producto.tipo)
    let {prductos} = persistenacia
    prductos.update(id, producto)
    res.json('El producto se actualizo con exito');
});

router.delete('/productos/borrar/:id', permisoAdministrador,  (req, res) => {
    let { id } = req.params;
    let producto = req.body
    const persistenacia = tipoDePersistenacia(producto.tipo)
    let {prductos} = persistenacia
    prductos.eliminar(id)
    res.json('Producto eliminado con exito');
});


function tipoDePersistenacia (val){
console.log('config' + JSON.stringify(config))
    return factory.getPersistencia(config.PERSISTENCE);
    /*switch (val) {
        case 1:
            return Persistencia = factory.getPersistencia('sql');
        case 2:
            return Persistencia = factory.getPersistencia('local');
        case 3:
            return Persistencia = factory.getPersistencia('mongoAtlas');
      }*/
}
function permisoAdministrador (req,res,next){
 let body = req.body;
 const url = req.originalUrl
 const metodo = req.method
 if(body.permisos.administrador){
    next()
 }else{
     res.status(500).send({error: '-1', descripcion: `ruta ${url} método ${metodo} no autorizada`})
 }
}
function permisoUsuario (req,res,next){
    let body = req.body;
    if(body.permisos.usuario){
       next()
    }else{
        res.status(500).send({error: '-1', descripcion: `ruta ${url} método ${metodo} no autorizada`})
    }
   }
module.exports = router;