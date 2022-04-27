import express from 'express';
const convert = express.Router();

const csvFilePath='users.csv'
const csv=require('csvtojson')

convert.get('/', async (req, res) => {
  const jsonArray=await csv().fromFile(csvFilePath);
  res.send(jsonArray);
});

export default convert;