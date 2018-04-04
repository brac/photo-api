// jshint asi:true

const router = require('express').Router()

router.route('/')
  .get((req, res) =>{
    res.json({message: 'I will preform GET'})
  })

  .post((req, res) =>{
    res.json({message: 'I will preform POST'})
  })

router.route('/:id')
  .get((req, res) =>{
    res.json({message: 'I will preform GET on one record'})
  })

  .patch((req, res) =>{
    res.json({message: 'I will preform PATCH'})
  })

  .delete((req, res) =>{
    res.json({message: 'I will preform DELETE'})
  })

module.exports = router