import express from 'express'

import controller from '../controllers/carrito.js'

const routes = express.Router()

routes.get('/', controller.findAll ) 
routes.post('/', controller.addItem )
routes.put('/:id', controller.updateQuantity);
routes.delete('/:id', controller.remove)
routes.delete('/', controller.removeAll)


export default routes