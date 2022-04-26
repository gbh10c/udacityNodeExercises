import express from 'express';
import logger from '../../utilities/logger';
const basses = express.Router();

basses.get('/', logger, (req, res) => {
  res.send('Welcome to the basses page!');
})

export default basses;