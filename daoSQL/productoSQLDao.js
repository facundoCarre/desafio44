const Producto = require('../modelos/productos');
const ProductoDTO = require('../dtoSQL/productoDTO');

class ProductoSQLDAO {

    constructor() {
    }

    async create(data) {
        return await Producto.guardar(data);
    }

    async findById(id) {
        let produto = await Producto.findById(id);
        return new ProductoDTO(produto);
    }

    async findAll() {
        let produto = await Producto.buscar();
        return produto.map(m => new ProductoDTO(m));
    }

    async update(id, toUpdate) {
        return await Producto.update(id, toUpdate);
    }

    async remove(id) {
        return await Producto.eliminar(id);
    }
}

module.exports = ProductoSQLDAO;