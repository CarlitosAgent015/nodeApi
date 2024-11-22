// routes/categoriaServicioRoutes.js
import express from 'express';
import {
    getCategorias,
    getCategoriaById,
    postCategoria,
    putCategoria,
    deleteCategoria
} from '../controller/categoriaServicioController.js';

const router = express.Router();

router.get('/', getCategorias);
router.get('/:id', getCategoriaById);
router.post('/', postCategoria);
router.put('/:id', putCategoria);
router.delete('/:id', deleteCategoria);

export default router;