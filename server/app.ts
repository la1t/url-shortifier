import express from 'express';
import cors from 'cors';
import parser from 'body-parser';
import logger from 'morgan';

import router from './routers';

const app = express();

app.use(logger('dev'));
app.use(cors({credentials: true, origin: true}));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use('/', router);

export default app;
