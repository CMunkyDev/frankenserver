const fs = require('fs')
const backendObject = require('./exampleObject')
//var now = `${Date().getFullYear()}-${Date().getMonth() + 1}-${Date().getDate()}`
let packageTemplate = require('./folder_gens/root/package_template')
let serverTemplate = require('./folder_gens/root/server_template')
let routeIndexTemplate = require('./folder_gens/routes/index_template')

fs.mkdirSync('./test_server_af')
fs.writeFileSync('./test_server_af/package.json', packageTemplate(backendObject))
fs.writeFileSync('./test_server_af/server.js', serverTemplate(backendObject.resources))
fs.mkdirSync('./test_server_af/routes')
fs.writeFileSync('./test_server_af/routes/index.js', routeIndexTemplate(backendObject.resources))

function createBE (bEObject) {
    
}

module.exports = createBE

