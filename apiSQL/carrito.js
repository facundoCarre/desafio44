const carritoDAO = require('../daoSQL/carritoSQLDao');
class CarritoController {

    constructor() { 
        this.carritoDAO = new carritoDAO();
    }

    async guardar(productos) {
        try {
            return await this.carritoDAO.guardar(productos);
        } catch (error) {
            throw error;
        }
    }

    async buscar() {
        try {
            return await this.carritoDAO.buscar();
        } catch (error) {
            throw error;
        }
    }

    async buscarPorId(id) {
        try {
            return await this.carritoDAO.buscarPorId(id);
        } catch (error) {
            throw error;
        }
    }
    async eliminar(condicion) {
        try {
            return await this.carritoDAO.eliminar(condicion);
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
}

module.exports = new CarritoController();