class CarritoDTO {

    constructor(carritoData) {
        this.id = carritoData._id;
        this.nombreProducto = carritoData.nombreProducto;
        this.precio = carritoData.precio;
        this.stock = carritoData.stock;
    }

    getId() {
        return this.id;
    }
}

module.exports = CarritoDTO;