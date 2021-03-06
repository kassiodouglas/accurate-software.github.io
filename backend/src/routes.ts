import express, { response } from 'express';

import CategoriesController from './controllers/categoriesController';
import AnnoucementsController from './controllers/annoucementsController';

import {Request, Response} from 'express';

const routes = express.Router();
const categoriesController = new CategoriesController();
const annoucementsController = new AnnoucementsController();



routes.get('/categories', categoriesController.index);

routes.get('/search-annoucement', annoucementsController.index);

routes.get('/search-annoucement/:type', annoucementsController.listHome);

routes.get('/anuncio/:type/:id', annoucementsController.show);

routes.post('/create-annoucement', annoucementsController.create);

routes.get('/count', annoucementsController.count);

routes.post('/finish-annoucement', annoucementsController.finish);



export default routes; 