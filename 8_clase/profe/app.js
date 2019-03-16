const mysql = require('mysql')
const io = require('socket.io')
const http = require('http')
const fs = require('fs')
const template = require('./template')

/**
 * io = Representa todos los sockets conectados al servidor de WebSocket
 * 
 * socket = Representa EL cliente (singular) que se conecto al servidor
*/

io.on("connection",socket=>{
    //Emit(evento String,data Any|Object)
    io.emit("enviar mensaje",{codigo : 1,msj : "Se ha conectado un nuevo usuario!"})
    //socket.emit("")
    socket.on("recibir mensaje",data=>{
        //guardar data en la base de datos
        //se lo emito a todos los sockets 
        //io.emit()
    })
})

io.listen(9000)

/*
const connection = mysql.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    database : "test"
})
*/

//Desde la variable que mantiene la conexion sale siempre un metodo llamado query que es la que permite ejecutar asincronicamente cada consulta a la BD. 

//connection.query(consulta String,callback Function)
//connection.query("SELECT * FROM alumnos",(err,res)=>{})

//connection.query(consulta String,callback Function)
//connection.query("SELECT * FROM alumnos WHERE id = ?",[1],(err,res)=>{})

//connection.close()

const server = http.createServer((req,res)=>{
    // 3) Tercer Ejemplo
    res.writeHead(200,{"content-type":"text/html"})
    res.end(template)

    /*
    --1) Primer ejemplo : 
    let {url} = req
    if (url == "/") {
        let script = fs.createReadStream(__dirname+"/index.html")
        res.writeHead(200,{"content-type":"text/html"})
        script.pipe(res)
    }

    --2) Segundo ejemplo : 

    let {url} = req
    if (url == "/socket.client.js") {
        let script = fs.createReadStream(__dirname+"/socket.client.js")
        res.writeHead(200,{"content-type":"application/javascript"})
        script.pipe(res)
    }else{
        res.end("Hola Mundo")
    }
    */
})
server.listen(8000)
/**
 * socket.io-client : Es el paquete de NPM para WebSockets de clientes
 */
