// controllers/categoriaServicioController.js
import CategoriaServicio from '../models/categoriaServicio.js';

// Obtener todas las categorías
export const getCategorias = async (req, res) => {
    try {
        const categorias = await CategoriaServicio.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una categoría por ID
export const getCategoriaById = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await CategoriaServicio.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva categoría
export const postCategoria = async (req, res) => {
    try {
        const { idCategoria, nombre, descripcion } = req.body;
        const nuevaCategoria = await CategoriaServicio.create({ idCategoria, nombre, descripcion });
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una categoría
export const putCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        const categoria = await CategoriaServicio.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        await categoria.update({ nombre, descripcion });
        res.json(categoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una categoría
export const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await CategoriaServicio.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        await categoria.destroy();
        res.json({ message: 'Categoría eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
