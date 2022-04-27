import express from 'express';
import logger from '../utilities/logger';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Connected to home page!');
});

routes.get('/basses', logger, (req, res) => {
  res.send('Welcome to the basses page!');
})

routes.get('/snares', logger, (req, res) => {
  res.send('Welcome to the snares page!');
})

routes.get('/tenors', (req, res) => {
  res.send('Welcome to the tenors page!');
})


export default routes;