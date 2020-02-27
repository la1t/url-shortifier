import { Router } from 'express';
import shortify from './shortify';

const baseRouter = Router();

baseRouter.use('/', shortify);

export default baseRouter;
