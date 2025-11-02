"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const canchas_1 = require("../routes/canchas");
const http_1 = require("http");
const startServer = () => {
    // Crea una aplicación de Express
    const app = (0, express_1.default)();
    // Define el puerto del servidor (usa el del entorno o 4000 por defecto)
    const port = process.env.PORT || 4000;
    // 1. Configuracion de la base de datos
    const connectToDatabase = () => {
        // Aquí puedes agregar la lógica para conectar a la base de datos
    };
    connectToDatabase();
    // 2. Configuración de middlewares
    const configureMiddlewares = () => {
        app.use(express_1.default.json());
    };
    configureMiddlewares();
    // 3. Configuración de rutas
    const configureRoutes = () => {
        // Rutas base para cada módulo de la aplicación
        const paths = {
            canchas: "/api/canchas",
            usuarios: "/api/usuarios",
            clientes: "/api/clientes",
        };
        // Conecta las rutas de canchas a la app en la ruta base (Routers)
        app.use(paths.canchas, canchas_1.canchasRoutes);
    };
    configureRoutes();
    // 4. Configuracion del servidor
    const httpServer = (0, http_1.createServer)(app);
    // 5. Ejecutamos del servidor
    httpServer.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
    });
};
exports.startServer = startServer;
