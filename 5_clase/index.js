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
/*async function obtenerComentarios() {
	//fetch().then().catch()
	let usuarios_response = await fetch(`${url}users`)
	let usuarios = await usuarios_response.json()
	let posts  = await fetch(`${url}posts?userId=${usuarios[7].id}`)
	let posts_user	= await posts.json()

	UNA FORMA!!!
	let results	= await Promise.all(posts_user.map( async post => {
		let fetch_comment = await fetch(`${url}comments?postId=${post.id}`)
		let comment = await fetch_comment.json()
		return comment
		})
	)

	let results	= await Promise.all(posts_user.map( async post => await fetch(`${url}comments?postId=${post.id}`)))
	let comentarios = await Promise.all(results.map(async response => await response.json()))

	console.log(comentarios)
}

// se puede aplicar el try-catch aca
obtenerComentarios()*/

