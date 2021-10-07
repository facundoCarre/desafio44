
const ProductoDAO = require('../daoSQL/productoSQLDao');
class ProductosController {

    constructor() {
        this.productoDAO = new ProductoDAO()
     }

    async guardar(productos) {
        try {
            return await this.productoDAO.create(productos);
        } catch (error) {
            throw error;
        }
    }

    async buscar() {
        try {
            return await this.productoDAO.buscar();
        } catch (error) {
            throw error;
        }
    }
    async buscarPorId(id) {
        try {
            return await this.productoDAO.buscarPorId(id);
        } catch (error) {
            throw error;
        }
    }
    async eliminar(condicion) {
        try {
            return await this.productoDAO.eliminar(condicion);
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
    
}

module.exports = new ProductosController();