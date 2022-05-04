const express = require('express')
const app = express()
const db = require('./database.js')

const port = 3000

app.get('/doAthing', (req, res, next) => {
  var sql = 'select * from cars'
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})

// Default response
app.use(function (req, res) {
  res.status(404)
})
