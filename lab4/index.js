const express = require('express')
const app = express()
const db = require('./database.js')
var cors = require('cors')

const port = 9000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

// Displays everything in the cars table.
// I chose to omit the points such as 'Mods_Rims' as I found them clunky and overwhelmig in the visual display
app.get('/api/cars', (req, res) => {
  var sql = 'SELECT * FROM cars'
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    else {
      res.json({
        message: 'success',
        data: rows
      })
    }
  })
})

// Displays a specific row given an id input
app.get('/api/cars/:col/:oper/:query', (req, res) => {
  var sql = 'SELECT * FROM cars WHERE ' + req.params.col + req.params.oper + '"' + req.params.query + '";'
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    else {
      res.json({
        message: 'success',
        data: rows
      })
    }
  })
})

// Adds a car to the database
app.post('/api/cars', (req, res) => {
  const carid = req.body.carid
  const year = req.body.year
  const make = req.body.make
  const model = req.body.model
  const email = req.body.email
  const timestamp = req.body.timestamp

  console.log(typeof req.body.carid)
  console.log(req.body.carid)

  var sql = 'INSERT INTO cars VALUES( "'
  + carid + '", "'
  + year + '", "'
  + make + '", "'
  + model + '", "'
  + email + '", "'
  + timestamp
  + '" );'

  db.all(sql, [], (err) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    else {
      res.json({
        message: 'Added succesfully'
      })
    }
  })
})

// Updates rows based on given input
app.put('/api/cars', (req, res) => {
  const newCarid = req.body.carid
  const newYear = req.body.year
  const newMake = req.body.make
  const newModel = req.body.model
  const newEmail = req.body.email
  const newTimestamp = req.body.timestamp

  const sql = 'UPDATE cars SET Car_id = "' +
            newCarid + '", Year = "' +
            newYear + '", Make = "' +
            newMake + '", Model = "' +
            newModel + '", Email = "' +
            newEmail + '", Timestamp = "' +
            newTimestamp + '" WHERE Car_id == "' + newCarid + '";'

  db.all(sql, [], (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    else {
      res.json({
        message: 'Updated succesfully'
      })
    }
  })
})

// default page
app.get('/', (req, res) => {
  res.send('Welcome to cars')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})

// Default response
app.use(function (req, res) {
  res.status(404)
})
