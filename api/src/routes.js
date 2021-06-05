import express from 'express'

import integrantesRoutes from './routes/integrantes.router.js'

const router = express.Router()

router.use('/api', [
    integrantesRoutes
])

router.get('/', (_, res) => {
  res.json({
    status: true,
    endpoint: '/api',
    message: 'API.',
  })
})

export default router
