// controllers/ordenServicioController.js
import OrdenServicio from '../models/ordenServicio.js';
import Cliente from '../models/cliente.js';

// Obtener todas las órdenes de servicio
export const getOrdenesServicio = async (req, res) => {
    try {
        const ordenes = await OrdenServicio.findAll({ include: Cliente }); // Incluyendo el cliente
        res.json(ordenes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una orden de servicio por ID
export const getOrdenServicioById = async (req, res) => {
    try {
        const { id } = req.params;
        const orden = await OrdenServicio.findByPk(id, { include: Cliente });
        if (!orden) {
            return res.status(404).json({ message: 'Orden de servicio no encontrada' });
        }
        res.json(orden);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva orden de servicio
export const postOrdenServicio = async (req, res) => {
    try {
        const { idOrden, fecha, estado, idCliente } = req.body;
        const nuevaOrden = await OrdenServicio.create({ idOrden, fecha, estado, idCliente });
        res.status(201).json(nuevaOrden);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una orden de servicio
export const putOrdenServicio = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha, estado, idCliente } = req.body;
        const orden = await OrdenServicio.findByPk(id);
        if (!orden) {
            return res.status(404).json({ message: 'Orden de servicio no encontrada' });
        }
        await orden.update({ fecha, estado, idCliente });
        res.json(orden);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una orden de servicio
export const deleteOrdenServicio = async (req, res) => {
    try {
        const { id } = req.params;
        const orden = await OrdenServicio.findByPk(id);
        if (!orden) {
            return res.status(404).json({ message: 'Orden de servicio no encontrada' });
        }
        await orden.destroy();
        res.json({ message: 'Orden de servicio eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
