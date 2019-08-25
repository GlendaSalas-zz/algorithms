import express from 'express'
import search from './search/searchRouter'
import sort from './sort/sortRouter'

const { notFound404, errorGenerate } = require('./handlers/errorHandlers')

const routeHandler = express.Router()

routeHandler.use('/search', search)
routeHandler.use('/sort', sort)
routeHandler.get('/', (req, res) => res.status(200).send(Object.assign({ Name: 'Algorithms', Version: 1.0 }, errorGenerate(200))))
routeHandler.get('*', notFound404).post('*', notFound404).patch('*', notFound404).delete('*', notFound404)
module.exports = routeHandler
