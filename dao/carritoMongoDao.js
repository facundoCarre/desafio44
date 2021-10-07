const Carrito = require('../modeloMongoLocal/carrito');
const CarritoDTO = require('../dto/carritoDTO');

class ProductoMongoDAO {

    constructor() {
    }

    async create(data) {
        return await Carrito.create(data);
    }

    async findById(id) {
        let produto = await Carrito.findById(id);
        return new CarritoDTO(produto);
    }

    async findAll() {
        let produto = await Carrito.find();
        return produto.map(m => new CarritoDTO(m));
    }

    async update(id, toUpdate) {
        return await Carrito.findByIdAndUpdate(id, toUpdate);
    }

    async remove(id) {
        return await Carrito.findByIdAndDelete(id);
    }
}

module.exports = ProductoMongoDAO;