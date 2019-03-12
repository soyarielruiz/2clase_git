const http = require('http')
const fs 	= require('fs')

const servidor = http.createServer((req, res)=>
{
	//Indispensable http termine con socket.end
	/*res.write("Hola")
	res.write("Mundo")*/
	// Default time out = 2m
	/*setTimeout(() => {
		res.end("!")
	}, 3000)*/

	//Content-Type: Deter,oma que tipo de recurso esta 
	//impactando en el cliente
	/*
		Cliente > Servidor
		multipart/formdata(tipo post)
		application/x-www-url-encoded(tipo get)


		Servidor > Cliente 
		text/html
		text/plain
		text/css
		application/json
		application/javascript
		image/jpeg
		image/gif
		image/png
		video/mp4
		audio/mp3
		audio/ogg
	*/
	//res.statusCode = 200
	//res.setHeader("content-type", "text/html")
	// (status, reasonPhrase, string, headers) : Server Response, PONER BIEN STATUS CODE
	// ya que igual te permite poner data
	//res.writeHead( 404, "Internal Server Error", {"content-type": "text/html"}) 
	//res.end("<h1> Hola Mundo </h1>")

	fs.readFile(`${__dirname}/video.mp4`, (err,data) =>{
		if (err) {
			console.error(err)
			res.writeHead(500, "Internal Server Error")
			res.end(err.message)
		} else {
			res.writeHead(200,{"content-type": "video/mp4"})
			res.end(data)
		}
	})
})	

servidor.listen(8000, () => console.log("Server 1 iniciado"));
