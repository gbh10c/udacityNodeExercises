import express from 'express';
const tenors = express.Router();

tenors.get('/', (req, res) => {
  res.send('Welcome to the tenors page!');
})

export default tenors;