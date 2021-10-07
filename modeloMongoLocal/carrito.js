const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombreProducto: { type: String, required: true, max: 100 },
    precio: { type: String, required: true },
    stock: { type: String, required: true },
});

const Carritos = mongoose.model('carritos', schema);

module.exports = Carritos;