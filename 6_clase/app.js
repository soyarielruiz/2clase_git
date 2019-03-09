/*
	Stream => El modulo solo nos da la abstraccion de streams
	en las interfaces de sus clases
	Writable : escritura
	Readable : lectura
	Duplex : lectura y escritura
	Transform : Tìpo especialde duplex donde se calcula en base a una 
	transformacion del input

	(todo lo que se consuma o transfiera es un buffer)

	(Si generas un script por variable se hace asincronico(despues de cargar todo), mientras que 
	si lo pones hardcodeado se hace sincronico)
*/

//const fs = require('fs')

// asyncronic
/*fs.readFile( __filename, ( err, data)=> {
	console.log(data.toString())
})*/

//fs.readFileSync(__filename) => NO HACER, es sincronica!!

// better way
//let archivo = fs.createReadStream(__dirname+"/index.html")

//let nuevo = fs.createWriteStream(__dirname+"/output.txt")


//El evento se dispara cuando se nos dispara un chunk a traves del stream en forma de buffer
// ESTA ES LA FORMA MANUAL
/* No es la ultima forma
archivo.on( "data", chunk=> {
	// TODOS los streams de tipo writeable implementan el metodo write para escribir
	// por streams
	nuevo.write(chunk)
})

//Todos los streams de tipo readable implementan el evento de tipo "end" y se dispara
// cuando no hay mas archivos para leer
archivo.on("end", ()=>{

})*/

// Asi se debe reescribir Stream, CON PIPES, para copiar y pegar el file que viene - asincronico - 
//archivo.pipe(nuevo)


/*

TCP/IP
HTTP

Request

Response 
Version codigo Mensaje
Headers
Body


http/1.1 200 Ok
Content-type text/html
Content-lenght 124

Access-Content-Allow-Origin: (quien tiene acceso a que recurso)
Access-Content-Allow-Origin: google.com
Access-Content-Allow-Origin: localhost

CORS: Politica de seguridad para compartir recursos a traves de un servidor
JSONP: Para saltar problemas de CORS 
*/

// NO es reco usado websocket a mano
// socket.io => porque hay navegadores que no reconocen webSocket
// si queres a mano debe ser ajax con Websocket
// con esto la red intenta nunca caerse

// Net : Para generar servidores de conexiones TCP
const net = require("net")

//sol para chat
let sockets = []

//En un server de TCP recibimos una instancia de net.Socket el cual implementa
// interfaz Stream Duplex, osea que podemos consumirlo y escribirlo
const servidor = net.createServer( socket => {
	sockets.push(socket)

	socket.write("Estableciendo conexion... \n\r")
	socket.write("Bienvenido! \n\r")
	//socket.end("Hola Mundo")
	socket.on("data", data=> {

		let regex = /[\n\r]/

		if ( regex.test(data)) {
			console.log("Enter")
		} else {

		}

		for (let index = 0; index < sockets.length; index++) {
			const s = sockets[index]
			
			// hay que hacer con chunk ir agarrando en un array y luego enviarlo a todos 
			if (s !== socket) {
				s.write(data, "\n\r")	
			}


		}
		//console.log("Consola Servidor: ", data, " \n\r")
		//socket.write("Conexion Telnet: ", data, " \n\r")
	})

})

servidor.listen(8000)
// Si o si debe devolverse un callback en http(en websocket no) , con respuesta al cliente - sino quedas en timeout