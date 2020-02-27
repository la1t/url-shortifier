import { Router } from 'express';
import ShortifyController from "../controllers/ShortifyController";

const router = Router();

router.post('/', ShortifyController.createShortify);
router.get('/:token', ShortifyController.redirectToFull);

export default router;
