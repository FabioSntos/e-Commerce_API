import { Router } from 'express';

import ProductController from './app/controller/ProductController';

const routes = new Router();

//routes.put('/products:id', ProductController.update);
routes.post('/store', ProductController.store);
routes.get('/', ProductController.getAll);
routes.get('/produto', ProductController.returnProducts)
routes.get('/produto/:id', ProductController.ProductById)
routes.delete('/remove/:id', ProductController.delete);
export default routes;
