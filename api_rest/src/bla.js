let server = require('./server')

function route (pathName) {
	console.log("Nueva petición recibida: " + pathName);
}
exports.route = route;