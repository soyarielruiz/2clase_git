//javascript definitive guide
//source decoded

//funcion variadica
/*function foo( a, b) {
	var copia 	= Array.prototype.slice.call(arguments,0)
	// a = 1
	// b = 2
	a = 10
	arguments[1] = 20
	console.log(a,b,arguments,copia)
}

foo(1,2)*/

//stack 			//web apis
//async(callback)

//Task Queue

/*
	V8(stack+heap) + Web Apis + Task Queue = Js Front End 
	V8 + libuv(para ver asincronismo) + Modulos Nativos(JS)+ C/C++ Librerias + Bindings = JS Back End
*/

// Event loop in Node
// Timers + IO Network + IO FS + Process
/*setTimeOut()
setInterval()
setInmediate()
XHR
Promise
fetch
process.nextTick()
*/

//Patron Modulo
//(1+1)()
/*(function( b ){
	let a = 1
	document.addEventListener("click", () => {
		console.log(a)
	})
})( 10 )*/ // () es la ejecucion de la funcion anonima, b = 10
// Node source para ver eficiencia de la app de node, para debuggear runtime del core

/*(function( require, __dirname, __filename, globals, module, ..otros ){
	/**
		
	
})( )*/

/*function a(callback) {
	callback("hola")
}*/

//Promise es para no tener que usar callback de callback de callback/ Pyramid of doom
/*let promise = new Promise(function ( bien, mal ) {
	//como ver si esta bien o mal?
	bien(1)
	mal(Error("error"))
})

promise.then(res=>{}).catch(err=>{})*/

//Worker Queue tiene prioridad ante al asincronismo

/*function test() {
	
	let promise = new Promise( function (resolve, reject ) {
		resolve("promesa")
	})

	setTimeout(() => {
		console.log("Timeout")
	});

	promise.then(res=> {console.log(res)})
}*/

/*let xhr = new XMLHttpRequest()
let url = "http://jsonplaceholder.typicode.com/"
xhr.open("GET", "http://jsonplaceholder.typicode.com/users")
xhr.addEventListener( "load", function(){
	if ( xhr.status == 200) {
		let usuarios = JSON.parse(xhr.response)
		let usuario = usuarios[4].id
		res(usuario)
		
		ket xhr_post = new XMLHttpRequest
		xhr_post.open("GET", `${url}post?userId=${usuario}`)
		xhr_post.addEventListener("load", function() {

		})
	}	
	xhr.send()
})*/

/*let usuarios = new Promise( function( res, rej) {
})

usuarios.then( id =>
	console.log(id)
)*/

// promise y xhr => fetch

// tipo get por defecto
let url = "http://jsonplaceholder.typicode.com/"
let usuario = fetch(`${url}users`, /*{method:"post"}*/)

usuario
.then( res => res.json())
.then( res => console.log(res))
.catch()