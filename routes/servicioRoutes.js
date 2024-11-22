// routes/servicioRoutes.js
import express from 'express';
import {
    getServicios,
    getServicioById,
    postServicio,
    putServicio,
    deleteServicio
} from '../controller/servicioController.js';

const router = express.Router();

router.get('/', getServicios);
router.get('/:id', getServicioById);
router.post('/', postServicio);
router.put('/:id', putServicio);
router.delete('/:id', deleteServicio);

export default router;
