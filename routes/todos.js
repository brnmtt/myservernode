const express = require('express');
const router = express.Router();

const list = require('../data/lista')

router.get('/', (req, res) => {
  res.send(list)
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  
  res.send(list.filter(item => item.id === id))
})

  module.exports = router