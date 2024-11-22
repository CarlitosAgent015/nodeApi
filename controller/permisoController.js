import Permiso from '../models/permiso.js';

export const getPermisos = async (req, res) => {
    try {
        const permisos = await Permiso.findAll();
        res.json(permisos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getIdPermisos = async (req, res) => {
    try {
        const { id } = req.params;
        const permiso = await Permiso.findByPk(id); 
        if (!permiso) {
            return res.status(404).json({ message: 'Permiso no encontrado' });
        }
        res.json(permiso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const postPermisos = async (req, res) => {
    try {
        const { idPermiso, nombre, descripcion, estado } = req.body;
        const nuevoPermiso = await Permiso.create({ idPermiso, nombre, descripcion, estado }); 
        res.status(201).json(nuevoPermiso);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const putPermisos = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, estado } = req.body;
        const permiso = await Permiso.findByPk(id); 
        if (!permiso) {
            return res.status(404).json({ message: 'Permiso no encontrado' });
        }
        await permiso.update({ nombre, descripcion, estado }); 
        res.json(permiso);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deletePermisos = async (req, res) => {
    try {
        const { id } = req.params;
        const permiso = await Permiso.findByPk(id);
        if (!permiso) {
            return res.status(404).json({ message: 'Permiso no encontrado' });
        }
        await permiso.destroy(); 
        res.json({ message: 'Permiso eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
