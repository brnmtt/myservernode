const express = require('express');
const router = express.Router();

const list = require('../data/lista')

router.get('/', (req, res) => {
    res.send(list)
  })

  module.exports = router