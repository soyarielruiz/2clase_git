const servidor = require('http').createServer(handler)
const fs = require('fs')
const io = require('io')(servidor)
//se puede usar fetch, node-fetch, request


function handler( req, res) {
	let archivo = fs.createReadStream( __dirname + "index-ws.html")
	res.writeHead(200, {"content-type": "text/html"})
	archivo.pipe(res)
};

io.on("conection", socket => {
	// al que se conecta
	socket.emit("nueva_con", { status:"ok", payload:"Te conectaste!"})
	// sirve para todos los demas, no para el mismo
	socket.broadcast.emit("broadcast", { status:"ok", payload:"Te conectaste!"})

	socket.on("mensaje", data => {
		console.log(data) //aca se puede usar desde el server la data 
	})

	//desde el server si quiero ver que se desconecto
	socket.on("disconect", () => {
		socket.username = "" // para setearlo inicialmente
	})
})

servidor.listen(8000)
// con express, el que levanta el puerto es http, no express
// lanzar una funcion antes que es destino => middleware
// app.use => middleware en express

/*const app = require('express')
const servidor = require('http').Server(app)
const io = require('socket.io')(servidor)
const fs = require('fs')*/

//podes usar el ruteador de express
//app.get("/")
/*
	app.use("/chat", (req, res, next) => {Todas las solicitudes})
*/

/*function handler( req, res ) {
	// Si pongo set Inmediate lo pongo al final de todo, del bucle
	// Si quiero que sea al inicio del otro bucle debo hacer un nextTick
	let archivo = fs.createReadStream( __dirname + "index-ws.html")
	res.writeHead(200, {"content-type": "text/html"})
	archivo.pipe(res)	
}

io.on("connection", socket => {
	socket.emit("nueva con", { status:"ok", payload:"Te conectaste!"})
})

servidor.listen(8000)*/