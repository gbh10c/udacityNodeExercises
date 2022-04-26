import express from 'express';
import logger from '../../utilities/logger';
const snares = express.Router();

snares.get('/', logger, (req, res) => {
  res.send('Welcome to the snares page!');
})

export default snares;