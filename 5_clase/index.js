//XHR + promise
let url = "https://jsonplaceholder.typicode.com/";

/*let usuarios = fetch(`${url}users`)
usuarios
.then(data=>data.json())
.then(data=>fetch(`${url}posts?userId=${data[6].id}`))
.then(data=>data.json())
.then(data=>Promise.all(data.map(post=>fetch(`${url}comments?postId=${post.id}`))))
.then(data=>Promise.all(data.map(comment=>comment.json())))
.then(data=>console.log(data))
.catch(error=>console.log(error))*/


/*
	Uno escribe con la idea de que haces el fetch y en la proxima linea 
	ya tenes la data y la usas como una variable mas
*/

/*let imagen = fetch(`img.jpg`); // => retorna una Promesa
imagen.then(data=> 
	console.log(data.blob())
	)
.then(data=> {
	console.log(data)
	let url = URL.createObjectURL(data)
	let img = document.createElement("img")
	img.src = url
	document.body.appendChild(img)
	})
.catch(error=>console.error(error))*/

// Async/Await
