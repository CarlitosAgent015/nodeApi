import Tecnico from '../models/tecnico.js';

// Obtener todos los técnicos
export const getTecnicos = async (req, res) => {
    try {
        const tecnicos = await Tecnico.findAll();
        res.json(tecnicos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un técnico por ID
export const getTecnicoById = async (req, res) => {
    try {
        const { id } = req.params;
        const tecnico = await Tecnico.findByPk(id);
        if (!tecnico) {
            return res.status(404).json({ message: 'Técnico no encontrado' });
        }
        res.json(tecnico);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo técnico
export const postTecnico = async (req, res) => {
    try {
        const { idTecnico ,nombre, telefono, email, estado} = req.body;
        const nuevoTecnico = await Tecnico.create({ idTecnico, nombre, telefono, email, estado});
        res.status(201).json(nuevoTecnico);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un técnico existente
export const putTecnico = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, telefono, email, estado } = req.body;
        const tecnico = await Tecnico.findByPk(id);
        if (!tecnico) {
            return res.status(404).json({ message: 'Técnico no encontrado' });
        }
        await tecnico.update({ nombre, telefono, email, estado});
        res.json(tecnico);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un técnico
export const deleteTecnico = async (req, res) => {
    try {
        const { id } = req.params;
        const tecnico = await Tecnico.findByPk(id);
        if (!tecnico) {
            return res.status(404).json({ message: 'Técnico no encontrado' });
        }
        await tecnico.destroy();
        res.json({ message: 'Técnico eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
