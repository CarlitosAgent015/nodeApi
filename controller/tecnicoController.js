import Tecnico from '../models/tecnico.js';
import CategoriaTecnico from '../models/categoriaTecnico.js';

// Obtener todos los técnicos
export const getTecnicos = async (req, res) => {
    try {
        const tecnicos = await Tecnico.findAll({
            include: {
                model: CategoriaTecnico,
                as: 'categoria'
            }
        });
        res.json(tecnicos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un técnico por ID
export const getTecnicoById = async (req, res) => {
    try {
        const { id } = req.params;
        const tecnico = await Tecnico.findByPk(id, {
            include: {
                model: CategoriaTecnico,
                as: 'categoria'
            }
        });
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
        const { nombre, telefono, email, categoriaNombre } = req.body;

        // Verifica si la categoría existe por su nombre
        const categoria = await CategoriaTecnico.findOne({ where: { nombre: categoriaNombre } });
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        const nuevoTecnico = await Tecnico.create({ nombre, telefono, email, categoriaId: categoria.id });
        res.status(201).json(nuevoTecnico);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un técnico existente
export const putTecnico = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, telefono, email, categoriaNombre } = req.body;
        const tecnico = await Tecnico.findByPk(id);
        if (!tecnico) {
            return res.status(404).json({ message: 'Técnico no encontrado' });
        }

        // Verifica si la categoría existe por su nombre
        if (categoriaNombre) {
            const categoria = await CategoriaTecnico.findOne({ where: { nombre: categoriaNombre } });
            if (!categoria) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            await tecnico.update({ nombre, telefono, email, categoriaId: categoria.id });
        } else {
            await tecnico.update({ nombre, telefono, email });
        }
        
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
