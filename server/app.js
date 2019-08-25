
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import errorHandlers from './src/handlers/errorHandlers'
import routeHandler from './src/routerHandlers'
import path from 'path'

dotenv.config()

const port = process.env.PORT
const publicPath=path.join(__dirname,'../public');

const expressApp = express()

expressApp.use(express.static(publicPath));
expressApp.use(bodyParser.json({ limit:'500mb' }))
expressApp.use(bodyParser.urlencoded({ limit:'500mb', extended: true }))
expressApp.use(express.static(publicPath))
expressApp.use('/v1', routeHandler)
expressApp.get('*', errorHandlers.notFound404)
	.post('*', errorHandlers.notFound404)
	.patch('*', errorHandlers.notFound404)
	.delete('*', errorHandlers.notFound404)
expressApp.use(errorHandlers.notFound)
if (expressApp.get('env') === 'development') {
	expressApp.use(errorHandlers.developmentErrors)
}
expressApp.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`It is listening ${port}`)
})

