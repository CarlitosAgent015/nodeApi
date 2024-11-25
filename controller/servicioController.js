// controllers/servicioController.js
import Servicio from '../models/servicio.js';

// Obtener todos los servicios
export const getServicios = async (req, res) => {
    try {
        const servicios = await Servicio.findAll(); // Incluyendo la categoría
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un servicio por ID
export const getServicioById = async (req, res) => {
    try {
        const { id } = req.params;
        const servicio = await Servicio.findByPk(id);
        if (!servicio) {
            return res.status(404).json({ message: 'Servicio no encontrado' });
        }
        res.json(servicio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo servicio
export const postServicio = async (req, res) => {
    try {
        const { idServicio, nombre, descripcion, precio, estado } = req.body;
        const nuevoServicio = await Servicio.create({ idServicio, nombre, descripcion, precio, estado });
        res.status(201).json(nuevoServicio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un servicio
export const putServicio = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, estado } = req.body;
        const servicio = await Servicio.findByPk(id);
        if (!servicio) {
            return res.status(404).json({ message: 'Servicio no encontrado' });
        }
        await servicio.update({ nombre, descripcion, precio, estado });
        res.json(servicio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un servicio
export const deleteServicio = async (req, res) => {
    try {
        const { id } = req.params;
        const servicio = await Servicio.findByPk(id);
        if (!servicio) {
            return res.status(404).json({ message: 'Servicio no encontrado' });
        }
        await servicio.destroy();
        res.json({ message: 'Servicio eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
