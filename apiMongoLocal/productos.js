const ProductoDAO = require('../dao/productoMongoDao');

class ProductosController {

    constructor() { 
        this.productoDAO = new ProductoDAO();
    }

    async guardar(productos) {
        try {
           return await this.productoDAO.create(productos);
        } catch (error) {
            throw error;
        }
    }

    async buscar(id) {
        try {
            return await this.productoDAO.findAll({});
        } catch (error) {
            throw error;
        }
    }
    async buscarPorId(id) {
        try {
            return await this.productoDAO.findById(id);
        } catch (error) {
            throw error;
        }
    }
    async eliminar(condicion) {

        try {
            return await this.productoDAO.remove(condicion);
        } catch (error) {
            throw error;
        }
    }
    async update(condicion, producto) {
        try {
           return await this.productoDAO.update(condicion, producto);
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

module.exports = new ProductosController();