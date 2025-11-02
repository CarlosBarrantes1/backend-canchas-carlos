"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canchasRoutes = void 0;
const express_1 = require("express");
const canchas_1 = require("../controllers/canchas");
// Crea y exporta el enrutador para las rutas de canchas
exports.canchasRoutes = (0, express_1.Router)();
// Creacion de nuestros enpoints   
exports.canchasRoutes.get('/', canchas_1.canchasGet);
exports.canchasRoutes.get('/:id', canchas_1.canchasGetById);
exports.canchasRoutes.post('/', canchas_1.canchasPost);
exports.canchasRoutes.put('/:id', canchas_1.canchasPut);
exports.canchasRoutes.delete('/:id', canchas_1.canchasDelete);
exports.canchasRoutes.patch('/:id', canchas_1.canchasPatch);
