const Producto = require('../modeloMongoLocal/productos');
const ProductoDTO = require('../dto/productoDTO');

class ProductoMongoDAO {

    constructor() {
    }

    async create(data) {
        return await Producto.create(data);
    }

    async findById(id) {
        let produto = await Producto.findById(id);
        return new ProductoDTO(produto);
    }

    async findAll() {
        let produto = await Producto.find();
        return produto.map(m => new ProductoDTO(m));
    }

    async update(id, toUpdate) {
        return await Producto.findByIdAndUpdate(id, toUpdate);
    }

    async remove(id) {
        return await Producto.findByIdAndDelete(id);
    }
}

module.exports = ProductoMongoDAO;