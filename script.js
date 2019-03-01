//script.js
/*  Primitivos( String-number-boolean-NULL-undefined ) 
	Objetos ( Object - Array - Function - etc ) => ver WebApi 
*/
let a = {};
a.toString();

// lo mismo var a = 1 == window.a = 1;

/*function Persona(){
	console.log(this)
}*/
function ctx(a,b) {
	console.log("Parametros: ", a,b)
	console.log("Contexto: ", this)
	console.log("**************")
}

//ctx(1,2) 									// 1 2 window{}
//ctx.call({ctx:"call"})					// undefined undefined {ctx:"call"} 
//ctx.call({ctx:"call"}, 10, 20)			// 10 20 {ctx:"call"} 
//ctx.apply()								// apply los pasa como array a los parametros
//ctx.apply({ctx:"apply"}, [100,200])		// 100, 200, ctx:"apply"
//Call y apply ejecutan la funcion
//ctx.bind()									// bind devuelve la funcion en si
//ctx.bind({ctx:"bind"}, 1000,2000)			//
//console.clear()

//New ejecuta la funcion con un onjeto vacio, retorna el objeto que creo
// new ctx == (let a = {} ctx.call(a) return a)

new ctx(1,2)


/*
	Function.call
	Function.apply
	Function.bind
	new Function

*/

// ver console.dir(XXX) => todas las props de la funcion en  json, apply, bind, call son de la funcion en si- del prototipo-.
//persona(); // windows{}

/*function foo(a,b) {
	console.log(a,b)
}

document.addEventListener("click", function(){
	foo(1,2);
});

//pasa a mejorarse con
document.addEventListener("click", foo.bind(null,1,2))
*/
