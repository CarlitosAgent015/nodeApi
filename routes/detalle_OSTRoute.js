// routes/detalleOrdenServicioRoutes.js
import {Router} from 'express';
import { 
    buscarTodosDetalles, 
    buscarDetallePorId
} from '../controller/detalle_OSTController.js';

const router = Router();

router.get('/detalles', buscarTodosDetalles);
router.get('/detalles/:id', buscarDetallePorId);


export default router;
