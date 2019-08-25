exports.notFound = () => {
	const err = new Error('Not Found')
	err.status = 404
	return {
		code: err.status,
		description: 'Not acceptable',
		message: err.message,
	}
}
exports.notFound404 = (req, res) => {
	res.status(404).send({ code: 404, message: 'Not Found', description: 'The requested resource could not be found but may be available in the future.' })
}
exports.notAcceptable = () => {
	const err = new Error('Not acceptable')
	err.status = 406
	return {
		code: err.status,
		description: 'Not acceptable',
		error: err.message,
	}
}
exports.errorGenerate = (error, description = '') => {
	let message
	let details
	if (error === 200) {
		message = 'OK'
		details = 'The request has succeeded.'
	} else if (error === 201) {
		message = 'Created'
		details = 'The request has succeeded and a new resource has been created as a result of it.'
	} else if (error === 302) {
		message = 'Found'
		details = '(Previously "Moved temporarily")'
	} else if (error === 400) {
		message = 'Bad Request'
		details = 'This response means that server could not understand the request due to invalid syntax'
	} else if (error === 401) {
		message = 'Unauthorized'
		details = 'The request was valid, but the server is refusing action.'
	} else if (error === 404) {
		message = 'Not Found'
		details = 'The requested resource could not be found but may be available in the future.'
	} else if (error === 406) {
		message = 'Not aceptables'
		details = 'The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request'
	} else if (error === 500) {
		message = 'Internal Server Error.'
		details = 'The server has encountered a situation it does not know how to handle.'
	}
	return {
		code: error,
		message,
		details,
		description,
	}
}
exports.developmentErrors = (err) => {
	err.stack = err.stack || ''
	const errorDetails = {
		message: err.message ? err.message : 'Error interno dev.',
		status: err.status ? err.status : 500,
		stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>'),
	}
	return {
		errorDetails,
	}
}
