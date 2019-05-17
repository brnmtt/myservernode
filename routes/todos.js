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


router.post('/', (req, res) => {
   const {
    id,
    titolo,
    descrizione
  } = req.body

  const obj ={id:id, titolo:titolo, descrizione:descrizione}
  const status = {}
  if (titolo) {
  status.code = 'ok inserimento effettuato'
  } else {
  status.code = 'error'
  status.message = 'titolo obbligatorio'  
  }
  res.send(status)
})

router.put('/', (req, res) => {
 
  const {
    id,
    titolo,
    descrizione
  } = req.body

  const obj ={id:id, titolo:titolo, descrizione:descrizione}

  const status = {}
  if(id){
    status.code = "dati corretti aggiornamento effettuato"
  }else{
    status.code = 'error'
    status.message = 'id obbligatorio'
  } 
  res.send(status)
})

router.delete('/', (req, res) => {
 
  const {
    id,
    titolo,
    descrizione
  } = req.body

  const obj ={id:id, titolo:titolo, descrizione:descrizione}

  const status = {}
  if(id){
    status.code = "eliminazione effettuata"
  }else{
    status.code = 'error'
    status.message = 'id obbligatorio'
  } 
  res.send(status)
})

  module.exports = router