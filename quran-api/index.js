const fs = require('mz/fs')
const {send} = require('micro')
const parseString = require('xml2js').parseString

module.exports = async (req, res) => {
  fs.readFile(__dirname + '/quran.xml').then((data) => {
    parseString(data, (err, results) => (send(res, 200, results)))
  })
}
	







