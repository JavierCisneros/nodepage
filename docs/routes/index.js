//Manejo de rutas del servidor
const express = require('express');
const router = express.Router();


//Routes del servidor
router.get('/', (req, res) => {
    res.render('index.html',{title: 'First website'}); //Tittle de home

    //res.sendFile(path.join(__dirname + '/views/index.html')); //Se ejecuta el archivo html, comentado 
    //para utilizar el motor de plantillas
    //console.log(__dirname+ '/views/index.html'); //Da la direccion de ejecusion del archivo
    //console.log(path.join(__dirname + '/views/index.html'));//Uso del modulo path para utilizar contrabarras
});


router.get('/contact', (req, res) => { //Nueva ruta
    res.render('contact.html',{title: 'Contact page'}); //Title de contact
});

//se exportan las rutas
module.exports = router;