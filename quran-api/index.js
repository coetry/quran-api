const fs = require('mz/fs')
const {send} = require('micro')
const parseString = require('xml2js').parseString

module.exports = async (req, res) => {
  const file = await fs.readFile(__dirname + '/quran.xml')

  parseString(file, (err, json) => {
    switch(req.url) {
      case '/': send(res, 200, json)
      case '/1': send(res, 200, json.quran.sura[0])
    }
  })
}

	







