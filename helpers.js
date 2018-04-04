// jshint asi:true

const express = require('express')
const client = require('./database/client')


const lookUp = (req, res, next) => {
  return client.query(
    `
      SELECT
      *
    FROM
      photos
    WHERE
      id = $1
   `, [req.params.id])
    .then(
      results => {
        if (results.rows.length === 0) {
          res.statusCode = 404
          res.json({ errors: ['Could not retrieve data']})
        } else {
          req.photo = results.rows[0]
          next()
        }
      },
      error => {
        res.statusCode = 500
        res.json({ errors: ['Could not retrieve data']})
      }
   )
}

module.exports = { lookUp }



