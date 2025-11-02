import { Router } from "express";
import { canchasDelete, canchasGet, canchasGetById, canchasPatch, canchasPost, canchasPut } from "../controllers/canchas";

// Crea y exporta el enrutador para las rutas de canchas
export const canchasRoutes : Router = Router();

// Creacion de nuestros enpoints   
canchasRoutes.get('/', canchasGet);
canchasRoutes.get('/:id', canchasGetById);
canchasRoutes.post('/', canchasPost);
canchasRoutes.put('/:id', canchasPut);
canchasRoutes.delete('/:id', canchasDelete);
canchasRoutes.patch('/:id', canchasPatch);


