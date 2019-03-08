// Node
// lee json por default busca extension .js o .json
/*
	Encasilla en los archivos en funciones tipo modulos
*/
//incluit modulos
//require("nombre")
//require() // syncronic, debe ser al ppio de todo o no seran incluidos

// almacena en buffers los modulos 
// pueden pasar cargas recursivas de modulos, cargas "circulares"
//module.exports = {} // para exportarlos 

/*let a = 1
module.exports = a

module.exports.a = 1

module.exports = {
	a : 1
}

(function(exports){
	// esto llama a module.exports que es un link simbolico no se puede usar exports = a ya que lo
	// pisarias
})*/

//los nombres de los archivos de modulo no pueden llamarse como alguno de los nativos
/*
	Por defecto Node ya es un Stream
	Buffer - Stream - EventEmitter

*/

/*const events = require("events")

//desestructurizacion de variables
let { EventEmitter } = events
//es igual a let EventEmitter = events.EventEmitter
*/


// Desestructurando con ejemplos
/*let arr = [1,2,3]
let uno = arr[0]
let dos = arr[1]
let tres = arr[2]
=> es lo mismo que
let { uno, dos, tres } = arr

let obj = {x:1, y:2}

let {x:uno, y:dos} = obj entonces pasas a usar uno y dos
=> que pasa a ser let { x, y } = obj
=> es lo mismo que
let x = obj.x
let y = obj.y*/

/*class CustomClass extends EventEmitter {

}

function CustomClass(){
	EventEmitter.class(this)
}

CustomClass.prototype = Object.create(EventEmitter.prototype)
*/

// EventEmitter ejemplo
// forma mas resumida
/*const { EventEmitter } = require("events")

let mi_variable = new EventEmitter()
//process es un modulo objeto de Node que viene en el entorno, acceso a Console.log y console.error

mi_variable.on("click", a=>{ //genera el callback a ejecutar
	process.nextTick( ()=> {console.log("Next Tick")}) //  process.nextTick lo pone al ppio
	setImmediate(() => console.log("Me hicieron click")) // lo deja a lo ultimo,
	console.log(a) // esto seria sincronico
})

mi_variable.emit("click", 1) //emite el evento, no existe el objeto e(evento)
console.log("Segundo")*/


// Buffer => parseo de datos grandes en pequeñas partes
// Stream => canal que pasa de punto A a punto B

//let buffer = new Buffer.alloc(4, "hola" ) // se pueden crear por string o por array
// guarda en memoria 
let buffer = new Buffer("hola" )
let buffer_vacio = new Buffer(6)
buffer_vacio.write("hola m")

console.log(buffer_vacio.toString())
console.log(buffer_vacio.toJSON())
console.log(buffer.toString())
console.log(buffer.toJSON())