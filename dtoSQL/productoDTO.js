class ProductoDTO {

    constructor(prodcutoData) {
        this.id = prodcutoData.id;
        this.nombre = prodcutoData.nombre;
        this.stock = prodcutoData.stock;
        this.precio = prodcutoData.precio;
    }

    getId() {
        return this.id;
    }

    getText() {
        return this.nombre;
    }

    getAuthor() {
        return this.stock;
    }
}

module.exports = ProductoDTO;