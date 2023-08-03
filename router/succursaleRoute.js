import { Router } from "express";
import { SuccursaleController } from "../controller/succursaleController.js";

const router = Router();

router.get('/', SuccursaleController.getSuccursale);
router.get('/code/:code', SuccursaleController.getSuccursaleByCode);

router.post('/', SuccursaleController.addSuccursale);

router.put('/:id', SuccursaleController.updateSuccursale);

router.delete('/:id', SuccursaleController.deleteSuccursale);

export default router;