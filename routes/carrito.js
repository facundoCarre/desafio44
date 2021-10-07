const express = require('express');
const router = express.Router();
const carrito = require('../apiSQL/carrito');
const factory = require('../factory');
router.get('/carrito/listar', permisoCarrito, async (req, res) => {
    let { id } = req.params
    const persistenacia = tipoDePersistenacia(req.body.tipo)
    let {carrito} = persistenacia
    let resultado = await carrito.buscar()
    res.json(resultado);
});

router.get('/carrito/listar/:id', permisoCarrito, async (req, res) => {
    let { id } = req.params
    const persistenacia = tipoDePersistenacia(req.body.tipo)
    let {carrito} = persistenacia
    let resultado = await carrito.buscarPorId(id)
    res.json(resultado);
});

router.post('/carrito/agregar',permisoCarrito, (req, res) => {
    let { id_producto } = req.params
    const persistenacia = tipoDePersistenacia(req.body.tipo)
    let {carrito} = persistenacia
    res.json(carrito.guardar(req.body));
});

router.delete('/carrito/borrar/:id',permisoCarrito, (req, res) => {
    try {
        let { id } = req.params
        const persistenacia = tipoDePersistenacia(req.body.tipo)
        let {carrito} = persistenacia
        carrito.eliminar(id)
        res.json('Producto de carrito eliminado con exito ');
    } catch (error) {
        res.json('el prodcuto no se pudo eliminar ');    }

});

router.put('/carrito/actualizar/:id', permisoCarrito ,(req, res) => {
    let { id } = req.params
    let producto = req.body
    const persistenacia = tipoDePersistenacia(req.body.tipo)
    let {carrito} = persistenacia
    carrito.update(id,producto)
    res.json('Se actualizo el carrito con exito');
});
function permisoCarrito (req,res,next){
    let body = req.body;
    const url = req.originalUrl
    const metodo = req.method
    if(body.permisos.administrador && body.permisos.usuario){
       next()
    }else{
        res.status(500).send({error: '-1', descripcion: `ruta ${url} método ${metodo} no autorizada`})
    }
   }
   function tipoDePersistenacia (val){
    let Persistencia 
    switch (val) {
        case 1:
            return Persistencia = factory.getPersistencia('sql');
        case 2:
            return Persistencia = factory.getPersistencia('local');
        case 3:
            return Persistencia = factory.getPersistencia('local');
      }
}

module.exports = router;