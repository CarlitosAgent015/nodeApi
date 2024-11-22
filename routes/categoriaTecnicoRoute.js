// routes/categoriaServicioRoutes.js
import express from 'express';
import {
    getCategoriasTecnico, getIdCategoriaTecnico, postCategoriaTecnico, putCategoriaTecnico, deleteCategoriaTecnico
} from '../controller/categoriaTecnicoController.js';

const router = express.Router();

router.get('/', getCategoriasTecnico);
router.get('/:id', getIdCategoriaTecnico);
router.post('/', postCategoriaTecnico);
router.put('/:id', putCategoriaTecnico);
router.delete('/:id', deleteCategoriaTecnico);

export default router;