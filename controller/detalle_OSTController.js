import DetalleOrdenServicio from '../models/detalle_OST.js';
import Servicio from '../models/servicio.js';
import Tecnico from '../models/tecnico.js';
import OrdenServicio from '../models/ordenServicio.js';

// Método para buscar todos los detalles de órdenes de servicio
export const buscarTodosDetalles = async (req, res) => {
    try {
        const detalles = await DetalleOrdenServicio.findAll({
            include: [
                { model: Servicio, as: 'servicio' },
                { model: Tecnico, as: 'tecnico' },
                { model: OrdenServicio, as: 'orden' }
            ]
        });

        return res.status(200).json(detalles);
    } catch (error) {
        console.error('Error al buscar todos los detalles:', error);
        return res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

// Método para buscar un detalle por ID
export const buscarDetallePorId = async (req, res) => {
    const { id } = req.params; // Obtén el ID de los parámetros de la solicitud
    try {
        const detalle = await DetalleOrdenServicio.findOne({
            where: { id }, // Asegúrate de que el campo en la base de datos es 'id'
            include: [
                { model: Servicio, as: 'servicio' },
                { model: Tecnico, as: 'tecnico' },
                { model: OrdenServicio, as: 'orden' }
            ]
        });

        if (!detalle) {
            return res.status(404).json({ message: 'Detalle no encontrado.' });
        }

        return res.status(200).json(detalle);
    } catch (error) {
        console.error('Error al buscar detalle por ID:', error);
        return res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
