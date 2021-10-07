
const carritoDAO = require('../dao/carritoMongoDao');
class CarritoController {

    constructor() { 
        this.carritoDAO = new carritoDAO();
    }

    async guardar(productos) {
        try {
           return await this.carritoDAO.create(productos);
        } catch (error) {
            throw error;
        }
    }

    async buscar(id) {
        try {
            
            return await this.carritoDAO.findAll({});
        } catch (error) {
            throw error;
        }
    }
    async buscarPorId(id) {
        try {
            return await this.carritoDAO.findById(id);
        } catch (error) {
            throw error;
        }
    }
    async eliminar(condicion) {

        try {
            return await this.carritoDAO.remove(condicion);
        } catch (error) {
            throw error;
        }
    }
    async update(condicion, producto) {
        try {
           return await this.carritoDAO.update(condicion, producto);
        } catch (error) {
            throw error;
        }
    }
    profuctoFormateado(params) {
       
        let productoFormat ={
            nombre: params.nombre,
            precio: params.precio,
            stock: params.stock
        } 
        return productoFormat
    }
    
}

module.exports = new CarritoController();