const fs = require('fs')
const backendObject = require('./exampleObject')

let packageTemplate = require('./folder_gens/root/package_template')
let serverTemplate = require('./folder_gens/root/server_template')
let indexFileTemplate = require('./folder_gens/root/index_template')
let routeFileTemplate = require('./folder_gens/routes/route_template')
let controllerClassFile = require('./folder_gens/controllers/controller_superclass')
let controllerFileTemplate = require('./folder_gens/controllers/controller_template')
let modelClassTemplate = require('./folder_gens/models/file_model_superclass')
let modelFileTemplate = require('./folder_gens/models/file_model_template')
fs.mkdirSync('./test_server_af')
fs.writeFileSync('./test_server_af/package.json', packageTemplate(backendObject))
fs.writeFileSync('./test_server_af/server.js', serverTemplate(backendObject.resources))
fs.mkdirSync('./test_server_af/routes')
fs.writeFileSync('./test_server_af/routes/index.js', indexFileTemplate(backendObject.resources, 'Router'))
backendObject.resources.forEach(resource => fs.writeFileSync(`./test_server_af/routes/${resource.name}.js`, routeFileTemplate(resource)))
fs.mkdirSync('./test_server_af/controllers')
fs.writeFileSync('./test_server_af/controllers/index.js', indexFileTemplate(backendObject.resources, 'Controller'))
fs.writeFileSync('./test_server_af/controllers/controller.js', controllerClassFile)
backendObject.resources.forEach(resource => fs.writeFileSync(`./test_server_af/controllers/${resource.name}.js`, controllerFileTemplate(resource)))
fs.mkdirSync('./test_server_af/models')
fs.writeFileSync('./test_server_af/models/index.js', indexFileTemplate(backendObject.resources, 'Model'))
fs.writeFileSync('./test_server_af/models/model.js', modelClassTemplate)
fs.mkdirSync('./test_server_af/database')
backendObject.resources.forEach(resource => fs.writeFileSync(`./test_server_af/database/${resource.name}.json`, JSON.stringify([])))
backendObject.resources.forEach(resource => fs.writeFileSync(`./test_server_af/models/${resource.name}.js`, modelFileTemplate(resource)))
function createBE (bEObject) {
    
}

module.exports = createBE

