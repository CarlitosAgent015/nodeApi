import { Router } from 'express';
import { getPermisos, getIdPermisos, postPermisos, putPermisos, deletePermisos } from '../controller/permisoController.js';

const router = Router();

router.get('/', getPermisos);
router.get('/:id', getIdPermisos);
router.post('/', postPermisos);
router.put('/:id', putPermisos);
router.delete('/:id', deletePermisos);

export default router;