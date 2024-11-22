import { Router } from 'express';
import {getOrdenesServicio, getOrdenServicioById, postOrdenServicio, putOrdenServicio, deleteOrdenServicio } from '../controller/ordenServicioController.js';

const router = Router();

router.get('/', getOrdenesServicio);
router.get('/:id', getOrdenServicioById);
router.post('/', postOrdenServicio);
router.put('/:id', putOrdenServicio);
router.delete('/:id', deleteOrdenServicio);

export default router;