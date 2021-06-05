import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import database from './src/database/index.js'
import * as seed from './src/seed.js'
import routes from './src/routes.js'

const port = process.env.PORT || 3200;

(async () => {
  try {

    if (process.argv.includes('db:seed')) {
      await database.sync({ force: true })
      await seed.grow()
    } else {
      await database.sync()
    }

    const app = express()

    app.use(cors())
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use(routes)

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    });
  } catch (error) {
    console.log(error)
  }
})();