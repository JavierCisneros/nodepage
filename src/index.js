const express = require('express'); //Se solicta el modulo express
const app = express(); // se crea el servidor 
const path = require('path'); //Se solicita el modulo path para trabajar en directorios
//Setting de servidor 
app.set('port', 4000); //Variable del puerto servidor algunos host pueden tener un puerto determinado
app.set('view engine', 'ejs');//Se configura el uso de ejs para traducir js a html
app.set('views',path.join(__dirname, 'views'));//Se agrega el path de view ya que esta debajo de src
app.engine('html', require('ejs').renderFile); //Renderizar los archivos html con ejs


//Middlewares (Funciones de procesamiento de datos)



//Routes
app.use(require(path.join(__dirname,'./routes/index.js')));//Se importan las rutas desde /src/routes/index.js
//console.log(path.join(__dirname+''));
//Static files (Archivos fuente para frontend)

app.use(express.static(path.join(__dirname, 'public')))

//Puerto en el que escucha el servidor
app.listen(app.get('port'), () =>{
    console.log('Listening on 4000', app.get('port'));
});