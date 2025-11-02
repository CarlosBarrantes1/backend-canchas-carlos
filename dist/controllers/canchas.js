"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canchasPatch = exports.canchasDelete = exports.canchasPut = exports.canchasPost = exports.canchasGetById = exports.canchasGet = void 0;
let canchas = [
    { uid: '1', nombre: 'Cancha principal', tipo: 'Futbol', esActivo: true },
    { uid: '2', nombre: 'Cancha secundaria', tipo: 'Tenis', esActivo: true },
    { uid: '3', nombre: 'Cancha de entrenamiento', tipo: 'Basquetbol', esActivo: false },
];
// Controladores de las rutas de canchas (GET, POST, PUT, DELETE, PATCH)
const canchasGet = (req, res) => {
    res.json({ ok: true, canchas });
};
exports.canchasGet = canchasGet;
const canchasGetById = (req, res) => {
    const { id } = req.params; // Desestructura 'id' desde req.params para usarlo directamente
    const cancha = canchas.find(c => c.uid === id); // Busca en el arreglo 'canchas' la cancha cuyo 'uid' sea igual al 'id'
    console.log("El valor de cancha es: ", cancha); // Muestra por consola el valor encontrado de 'cancha'
    cancha ? res.json({ ok: true, cancha }) : res.status(404).json({ ok: false, mensaje: `Cancha con id ${id} no encontrada` });
};
exports.canchasGetById = canchasGetById;
const canchasPost = (req, res) => {
    const { nombre, tipo, esActivo } = req.body;
    const nuevoId = (canchas.length + 1).toString();
    const nuevaCancha = { uid: nuevoId, nombre, tipo, esActivo };
    canchas.push(nuevaCancha);
    res.status(201).json({ ok: true, mensaje: 'Cancha creada exitosamente', cancha: nuevaCancha });
};
exports.canchasPost = canchasPost;
const canchasPut = (req, res) => {
    const { id } = req.params; // Desestructura 'id' desde req.params para usarlo directamente
    const { nombre, tipo, esActivo } = req.body; // Desestructura los campos necesarios desde el cuerpo de la solicitud
    const index = canchas.findIndex(c => c.uid === id); // Busca el índice de la cancha a actualizar
    // Actualiza la cancha en el arreglo
    if (index >= 0) {
        canchas[index] = {
            uid: canchas[index].uid,
            nombre,
            tipo,
            esActivo
        };
        res.json({ ok: true, mensaje: 'Cancha actualizada exitosamente', cancha: canchas[index] });
    }
    else {
        res.status(404).json({ ok: false, mensaje: `Cancha con id ${id} no encontrada` });
    }
};
exports.canchasPut = canchasPut;
const canchasDelete = (req, res) => {
    const { id } = req.params; // Obtiene el 'id'
    const nuevasCanchas = canchas.filter(c => c.uid !== id); // Crea un nuevo arreglo excluyendo la cancha con el id indicado
    if (nuevasCanchas.length !== canchas.length) { // Verifica si se eliminó alguna cancha (si cambió el tamaño del arreglo)
        canchas = nuevasCanchas; // Actualiza el arreglo original con las canchas restantes
        res.json({
            ok: true,
            msg: `Cancha con id ${id} eliminada correctamente`,
            canchas
        });
    }
    else {
        res.status(404).json({
            ok: false,
            msg: `Cancha con id ${id} no encontrada`
        });
    }
};
exports.canchasDelete = canchasDelete;
const canchasPatch = (req, res) => {
    const { id } = req.params; // Desestructura 'id' desde req.params para usarlo directamente
    const { nombre, tipo, esActivo } = req.body; // Desestructura los campos que podrían venir
    const cancha = canchas.find(c => c.uid === id); // Busca la cancha con el ID dado
    if (cancha) {
        // Actualiza solo los campos enviados (si existen)
        nombre !== undefined ? cancha.nombre = nombre : null;
        tipo !== undefined ? cancha.tipo = tipo : null;
        esActivo !== undefined ? cancha.esActivo = esActivo : null;
        res.json({ ok: true, mensaje: 'Cancha actualizada parcialmente', cancha });
    }
    else {
        res.status(404).json({ ok: false, mensaje: `Cancha con id ${id} no encontrada` });
    }
};
exports.canchasPatch = canchasPatch;
