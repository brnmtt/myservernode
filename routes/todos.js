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
    descrizione,
    operazione
  } = req.body

  const obj ={id:id, titolo:titolo, descrizione:descrizione}

  const status = {}
  //in base al campo operazione svolgo una diversa operazione
  if(operazione){
    //inserimento
    if(operazione === "inserimento"){
      if (titolo) {
        status.code = 'ok inserimento effettuato'
      } else {
        status.code = 'error'
        status.message = 'titolo obbligatorio'
      }
    //aggiornamento
    }else if(operazione === "aggiornamento"){
      if(id){
        status.code = "dati corretti aggiornamento effettuato"
      }else{
        status.code = 'error'
        status.message = 'id obbligatorio'
      }
    //eliminazione  
    }else if(operazione === "eliminazione"){
      if(id){
        status.code = "eliminazione effettuata"
      }else{
        status.code = 'error'
        status.message = 'id obbligatorio'
      }
    }else{
        status.code = 'error'
        status.message = 'operazione non valida'  
    }
  }else{
    status.code = 'error'
    status.message = 'operazione obbligatoria'
  }
  
  
  res.send(status)
})

  module.exports = router