
const express = require('express')
const app = express
const helmet = require('helmet')
const cors = require('cors')

app.use(helmet())
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app,get('/', (req,res) => res.json ({message: 'welcome to express'}))

app.use('/api', require('./routes'))

app.listen(3001,() =>{

  console.log(`welcome on port 3001`)

})

//usuario type cliente y adming
//registro y login
//productos
//reseñas 
//ordenes

//rutas y modelos



//npm i -S bcrypt
//npm i -S helmet cors
//npm i -S jsonwebtoken


//helmet y cores - investigar

/* Helmet es realmente una colección de nueve funciones de middleware más paquetes que establecen cabeceras HTTP relacionadas con la seguridad:

csp establece la cabecera Content-Security-Policy para evitar ataques de scripts entre sitios y otras inyecciones entre sitios.
hidePoweredBy elimina la cabecera X-Powered-By.
hsts establece la cabecera Strict-Transport-Security que fuerza conexiones seguras (HTTP sobre SSL/TLS) con el servidor.
ieNoOpen establece X-Download-Options para IE8+.
noCache establece cabeceras Cache-Control y Pragma para inhabilitar el almacenamiento en memoria caché del lado de cliente.
noSniff establece X-Content-Type-Options para evitar que los navegadores rastreen mediante MIME una respuesta del tipo de contenido declarado.
frameguard establece la cabecera X-Frame-Options para proporcionar protección contra el clickjacking.
xssFilter establece X-XSS-Protection para habilitar el filtro de scripts entre sitios (XSS) en los navegadores web más recientes. */

///cors.
//es un mecanismo o política de seguridad que permite controlar las peticiones HTTP asíncronas que se 
//pueden realizar desde un navegador a un servidor con un dominio diferente de la página cargada o
//riginalmente. Este tipo de peticiones se llaman peticiones de origen cruzado (cross-origin).