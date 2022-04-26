import express from 'express';
import basses from './api/basses';
import snares from './api/snares';
import tenors from './api/tenors';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Connected to home page!');
});

routes.use('/basses', basses);
routes.use('/snares', snares);
routes.use('/tenors', tenors);

export default routes;