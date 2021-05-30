import { Router } from 'express';
import { createConnection } from 'mysql2';

const routes = new Router();
const connection = createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'pass',
  database: 'banco_aula_workbench',
});
connection.connect();

routes.get('/products', (req, res) => {
  connection.query(
    'SELECT * FROM banco_aula_workbench.produtos',
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    },
  );
});

export default routes;
