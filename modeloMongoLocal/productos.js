const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: { type: String, required: true, max: 100 },
    precio: { type: String, required: true },
    stock: { type: String, required: true },
});

const Productos = mongoose.model('Producto', schema);

module.exports = Productos;