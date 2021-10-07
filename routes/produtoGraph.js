const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
//import config from '../config.js'
const factory = require('../factory');
const config = require('../config/config')
const prductos = require('../apiMongoLocal/productos');
class RouterProductos {
    constructor() {
        this.productosController = prductos
    }

    start() {
        // GraphQL schema
        const schema = buildSchema(`
            type Query {
                producto: [Producto]
            },
            type Mutation {
                guardarProducto(
                    nombre: String!,
                    precio: String!,
                    stock: String!,
                ): Producto,
                actualizarProducto(
                    _id: String!,
                    nombre: String!,
                    precio: String!,
                    stock: String!,
                ): Producto,
                borrarProducto(
                    _id: String!,
                ): Producto,                                
            },
            type Producto {
                _id: String,
                nombre: String!
                precio: String!
                stock: String!
            }    
        `);

        /*const persistenacia = factory.getPersistencia(config.PERSISTENCE);
        let {prductos} = persistenacia*/
        const guardarProducto = async function (productos) {
            console.log(JSON.stringify(productos))
            return await prductos.guardar(productos);
        }
        const buscar = async function (productos) {
            return await prductos.buscar();
        }
        const actualizarProducto = async function (productos) {
            console.log(JSON.stringify(productos))
            return await prductos.update(productos._id, productos);
        }
        const borrarProducto = async function (id) {
            console.log(JSON.stringify(id._id))
            return await prductos.eliminar(id._id);
        }
        // Root resolver
        const root = {
            productos : buscar,
            guardarProducto : guardarProducto,
            actualizarProducto:  actualizarProducto,
            borrarProducto :  borrarProducto
        };

        return graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: config.GRAPHIQL == 'true'
        })
    }
}
module.exports = new RouterProductos();