import { Router } from 'express';
import { getUsuarios, getIdUsuarios, postUsuarios, putUsuarios, deleteUsuarios} from '../controller/usuarioController.js';

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getIdUsuarios);
router.post('/', postUsuarios);
router.put('/:id', putUsuarios);
router.delete('/:id', deleteUsuarios);

export default router;