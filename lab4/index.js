const express = require('express')
const app = express()
const db = require('./database.js')

const port = 3000

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
app.get('/api/cars/:id', (req, res) => {
  var sql = 'SELECT * FROM cars WHERE Car_id == ' + req.params.id + ';'
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
