import { Router } from 'express';
import { createConnection } from 'mysql2';
import ProductController from './app/controller/ProductController';

const routes = new Router();

routes.put('/products:id', ProductController.update);

export default routes;

/*
connection.query(
    'SELECT * FROM banco_aula_workbench.produtos',
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    },
  );

  */
