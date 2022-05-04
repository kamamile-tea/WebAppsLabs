var sqlite3 = require('sqlite3').verbose()
var csvToJson = require('convert-csv-to-json')

const DBSOURCE = 'cars.db'

let inFile = './data/data.csv'
let outFile = 'origin.json'

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(inFile, outFile)

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message)
    throw err
  }
  else {
    console.log('Connected to the SQLite database.')
    // db.run('DROP TABLE IF EXISTS Cars;')
    // db.run('DROP TABLE IF EXISTS original;')
    // db.run('CREATE TABLE IF NOT EXISTS Cars FROM ;')
    // db.run('INSERT INTO example VALUES("kami");')
  }
})

module.exports = db
