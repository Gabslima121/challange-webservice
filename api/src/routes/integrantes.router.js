import express from 'express'

import * as integrantes from '../controllers/integrantesController.js'

const resource = express.Router()
const routes = express.Router()

resource.use('/integrantes', routes)

routes.get('/', integrantes.index)
routes.get('/:rm', integrantes.show)
routes.post('/', integrantes.create)
routes.put('/:rm', integrantes.update)
routes.delete('/:rm', integrantes.destroy)


export default resource