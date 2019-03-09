let http 	= require('http')
let url 	= require('url')
let port 	= 8080

module.exports = http.createServer(function (req, res) {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/html;charset=utf8')

	if ( req.url === "/bla") {
		//ver evento listen
	} else {
		res.end('Hello World\n')
	}

}).listen(port, 'localhost')


console.log(`Server running at http://localhost:${port}/`);