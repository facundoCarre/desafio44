const knex = require('../database/knex');

class Carrito {

    constructor() { }

    async guardar(carrito) {
        try {
            let resultado = await knex('carritos').insert(this.carritoFormateado(carrito));
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async buscar() {
        try {
            let resultado = await knex.from('carritos').select('*')
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async buscarPorId(id) {
        try {
            let resultado = await knex.from('carritos').select('*').where('id', parseInt(id))
            return resultado;
        } catch (error) {
            throw error;
        }
    }
    async eliminar(condicion) {
        try {
            let resultado = await knex.from('carritos').where('id', parseInt(condicion)).del()
            return resultado;
        } catch (error) {
            throw error;
        }
    }
    async update(condicion,carritos) {
        try {
           let resultado = await knex.from('carritos').where('id', parseInt(condicion)).update({ producto_id: carritos.producto_id })
            return resultado
        } catch (error) {
            throw error;
        }
    }
    carritoFormateado(params) {
       
        let carritoFormat ={
            nombre: params.nombre,
            producto_id: params.producto_id,
        } 
        return carritoFormat
    }
}

module.exports = new Carrito();