import { Router } from 'express';
import {getTecnicos, getTecnicoById, postTecnico, putTecnico, deleteTecnico} from '../controller/tecnicoController.js';

const router = Router();

router.get('/', getTecnicos);
router.get('/:id', getTecnicoById);
router.post('/', postTecnico);
router.put('/:id', putTecnico); 
router.delete('/:id', deleteTecnico); 

export default router;