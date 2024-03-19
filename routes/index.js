
const express = require('express')
const productsRouter = require('./productsRouter')
const usersRoutes = require('./usersRouter')
const categoriesRoutes = require('./categoriesRouter')



function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/users', usersRoutes)
  router.use('/categories', categoriesRoutes)
}

module.exports = routerApi
