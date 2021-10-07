const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
//import config from '../config.js'
const factory = require('../factory');
const config = require('../config/config')
const carrito = require('../apiMongoLocal/carrito');
class RouterCarritos {
    constructor() {
        this.carritosController = carrito
    }

    start() {
        // GraphQL schema
        const schema = buildSchema(`
            type Mutation {
                guardarCarrito(
                    nombreProducto: String!,
                    precio: String!,
                    stock: String!,
                ): Carrito,
                actualizarCarrito(
                    _id: String!,
                    nombreProducto: String!,
                    precio: String!,
                    stock: String!,
                ): Carrito,
                borrarCarrito(
                    _id: String!,
                ): Carrito,                                
            },
            type Carrito {
                _id: String,
                nombreProducto: String!
                precio: String!
                stock: String!
            }    
        `);

        const guardarCarrito = async function (carritos) {
            console.log(JSON.stringify(carritos))
            return await carrito.guardar(carritos);
        }
        const buscar = async function () {
            return await carrito.buscar();
        }
        const  actualizarCarrito= async function (carritos) {
            console.log(JSON.stringify(carritos))
            return await carrito.update(carritos._id, carritos);
        }
        const borrarCarrito = async function (id) {
            return await carrito.guardar(id);
        }
        const root = {
            productos : buscar,
            guardarProducto :guardarCarrito,
            actualizarProducto:  actualizarCarrito,
            borrarProducto :  borrarCarrito
        };

        return graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: config.GRAPHIQL == 'true'
        })
    }
}
module.exports = new RouterCarritos();