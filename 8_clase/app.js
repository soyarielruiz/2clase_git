const mysql = require('mysql')
const io = require('socket.io')
const http = require('http')
const template = require('./template')
const fs 	= require('fs')

/*const connection = mysql.createConnection({
	host : "localhost",
	port : "3306",
	user: "",
	password: "",
	database: ""
})

/*
	socket.io-client : Es el paquete NPM para Websockets de clientes

	Desde la variable que mantiene la conexion sale siempre un metodo 
	llamado query que es la que permite ejecutar asincronicamente cada
	consulta a la DB
*/

//connection.query( consulta String, callback function)
/*connection.query( "SELECT * FROM alumnos", (err, res) => {})

connection.query(consulta string)*/
//sanitizar queries las de nivel 1, ver las de nivel 2
// no se puede hacer inyeccion de sql en mongo
/* Forma mas segura de hacerlo
connection.query("SELECT * FROM alumnos WHERE id = ?", [1], (err, res) => {

})*/

// cerrar conexion
//connection.close()

//manejo de socket.io
/*
	io = todos los sockets conectados al mismo servidor de WebSocket(es como un broadcast de info)
	socket = Representa el cliente(singular) que tenes conectado en el servidor en ese momento
	callbacks => error y cierre de conexion

	debo generar una funcion post para que lo guarde en la base
*/

//connection te da el aviso cuando se conecta alguien
io.on("connection", socket=> {
	// Emit(evento String, data Any Type|Object)
	io.emit("Enviar Mensaje", {msj : "Se ha conectado un nuevo usuario!"})
	//socket.emit("")
	socket.on("recibir mensaje", data => {
		//guardar data en la base de datos
		//emito a todos los sockets

	})
})

io.listen(9000)

const server = http.createServer((req, res) => {
	/*res.writeHead(200, {"content-type":"text/html"})
	res.end(template)*/

	
	/*-- 1) ejemplo*/
	let {url} = req
	if ( url == "/") {
		let script = fs.createReadStream( __dirname + "/index.html")

		res.writeHead(200, {"content-type":"text/html"})
		script.pipe(res)
	} else {
		res.end("Hola Mundo")
	}



/*
	2do ejemplo 
	let {url} = req
	if ( url == "/socket.client.js") {
		let script = fs.createReadStream( __dirname + "/socket.client.js")

		res.writeHead(200, {"content-type":"application/Javascript"})
	} else {
		res.end("Hola Mundo")
	}*/
})

server.listen(8000)