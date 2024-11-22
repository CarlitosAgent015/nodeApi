import { Router } from 'express';
import { getRoles, getIdRoles, postRoles, putRoles, deleteRoles } from '../controller/rolController.js';

const router = Router();

router.get('/', getRoles);
router.get('/:id', getIdRoles);
router.post('/', postRoles);
router.put('/:id', putRoles);
router.delete('/:id', deleteRoles);

export default router;