"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ===== IMPORTACIONES =====
// Importamos la librería Express que nos permite crear un servidor web
const express_1 = __importDefault(require("express"));
require("dotenv/config");
// ===== CREACIÓN DE LA APLICACIÓN =====
// Creamos una instancia de Express (nuestra aplicación web)
// const app = express()
// const port = process.env.PORT
// // ===== DEFINICIÓN DE RUTAS =====
// // Definimos una ruta GET para la URL raíz "/"
// // Cuando alguien visite http://localhost:3000/ se ejecutará esta función
// app.get('/', (req, res) => {
//   // req = request (petición del cliente)
//   // res = response (respuesta que enviamos al cliente)
//   const suma = 20 + 10;
//   // Enviamos como respuesta el texto 
//   res.send('La suma es: ' + suma)
// })
// app.listen(port)
const app = (0, express_1.default)(); // Creamos la aplicacion express 
const port = process.env.PORT || 4000;
app.use(express_1.default.json()); // Para que entienda json en las peticiones
// (Metodo HTTP) + base de url+enpoint
app.get('/canchas', (req, res) => {
    // aca colocamos la logica
    res.json({ mensaje: 'Lista de canchas' });
});
app.get('/canchas/:id', (req, res) => {
    const valores = req.params.id;
    console.log(valores);
    // aca colocamos la logica
    res.json({ mensaje: 'lista identificado exitosamente' });
    //res.json({mensaje: 'Crear una nueva cancha'});
});
app.post('/canchas', (req, res) => {
    const valores = req.body;
    console.log("Se Recibio: ", valores);
    // aca colocamos la logica
    res.status(200).json({ mensaje: 'Cancha creada exitosamente' });
    //res.json({mensaje: 'Crear una nueva cancha'});
});
app.listen(port, () => {
    console.log(`Servidor esta activo en el puerto ${port}`);
});
