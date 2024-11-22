import CategoriaTecnico from '../models/categoriaTecnico.js';

// Obtener todas las categorías de técnicos
export const getCategoriasTecnico = async (req, res) => {
    try {
        const categorias = await CategoriaTecnico.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una categoría de técnico por ID
export const getIdCategoriaTecnico = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await CategoriaTecnico.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva categoría de técnico
export const postCategoriaTecnico = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const nuevaCategoria = await CategoriaTecnico.create({ nombre, descripcion });
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una categoría de técnico
export const putCategoriaTecnico = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        const categoria = await CategoriaTecnico.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        await categoria.update({ nombre, descripcion });
        res.json(categoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una categoría de técnico
export const deleteCategoriaTecnico = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await CategoriaTecnico.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        await categoria.destroy();
        res.json({ message: 'Categoría eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
