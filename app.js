// jshint asi:true

const express     = require('express')
const app         = express()
const bodyParser  = require('body-parser')
const routes  = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/photos', routes)

app.get('*', (req, res) => {
  res.json({ message: 'Welcome to the api'})
})

app.listen(3000, () => {
  console.log('App is listening on port 3000')
})