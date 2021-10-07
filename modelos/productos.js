const knex = require('../database/knex');

class Productos {

    constructor() { }

    async guardar(productos) {
        console.log('edirt' + this.profuctoFormateado(productos))
        try {
            let resultado = await knex('productos').insert(this.profuctoFormateado(productos));
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async buscar() {
        try {
            let productos = await knex.from('productos').select('*')
            return productos;
        } catch (error) {
            throw error;
        }
    }
    async buscarPorId(id) {
        try {
            let productos = await knex.from('productos').select('*').where('id', parseInt(id))
            return productos;
        } catch (error) {
            throw error;
        }
    }
    async eliminar(condicion) {
        try {
            let resultado = await knex.from('productos').where('id', parseInt(condicion)).del()
            return resultado;
        } catch (error) {
            throw error;
        }
    }
    async update(condicion,producto) {

        try {
           let resultado = await knex.from('productos').where('id', parseInt(condicion)).update({ nombre: producto.nombre,
            foto: producto.foto,
            precio: producto.precio,
            fecha: producto.fecha })
            return resultado
        } catch (error) {
            throw error;
        }
    }
    profuctoFormateado(params) {
       
        let productoFormat ={
            nombre: params.nombre,
            precio: params.precio,
            stock: params.stock
        } 
        return productoFormat
    }
}

module.exports = new Productos();