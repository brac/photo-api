// jshint asi:true

const router = require('express').Router()
const { lookUp } = require('../helpers')

router.route('/')
  .get((req, res) =>{
    res.json({message: 'I will preform GET'})
  })

  .post((req, res) =>{
    res.json({message: 'I will preform POST'})
  })

router.route('/:id')
  .get(lookUp, (req, res) =>{
    res.json({result: `GET on ${req.photo.description}` })
  })

  .patch(lookUp, (req, res) =>{
    res.json({result: `PATCH on ${req.photo.description}`})
  })

  .delete(lookUp, (req, res) => {
    res.json({result: `DELETE on ${req.photo.description}`})
  })

module.exports = router