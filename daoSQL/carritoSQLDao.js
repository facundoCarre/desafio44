const Carrito = require('../modelos/carrito');
const CarritoDTO = require('../dto/carritoDTO');

class ProductoMongoDAO {

    constructor() {
    }

    async create(data) {
        return await Carrito.guardar(data);
    }

    async findById(id) {
        let produto = await Carrito.findById(id);
        return new CarritoDTO(produto);
    }

    async findAll() {
        let produto = await Carrito.findAll();
        return produto.map(m => new CarritoDTO(m));
    }

    async update(id, toUpdate) {
        return await Carrito.update(id, toUpdate);
    }

    async remove(id) {
        return await Carrito.eliminar(id);
    }
}

module.exports = ProductoMongoDAO;