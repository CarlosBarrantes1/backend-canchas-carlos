import express from 'express';
import { canchasRoutes } from '../routes/canchas';
import { createServer } from 'http';

export const startServer = () =>{
    
    // Crea una aplicación de Express
    const app = express();

    // Define el puerto del servidor (usa el del entorno o 4000 por defecto)
    const port = process.env.PORT || 4000;

    // 1. Configuracion de la base de datos
    const connectToDatabase = () => {
        // Aquí puedes agregar la lógica para conectar a la base de datos
    };
    connectToDatabase();

    // 2. Configuración de middlewares
    const configureMiddlewares = () => {
        app.use(express.json());
    }
    configureMiddlewares();

    // 3. Configuración de rutas
    const configureRoutes = () => {
        // Rutas base para cada módulo de la aplicación
        const paths = {
            canchas:"/api/canchas",
            usuarios:"/api/usuarios",
            clientes:"/api/clientes",
        }
        // Conecta las rutas de canchas a la app en la ruta base (Routers)
        app.use(paths.canchas,canchasRoutes);
    }
    configureRoutes();

    // 4. Configuracion del servidor
    const httpServer = createServer(app);

    // 5. Ejecutamos del servidor
    httpServer.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
    });
}