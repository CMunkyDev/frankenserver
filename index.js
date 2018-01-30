const JSZip = require('jszip')
const fs = require('fs')

let packageTemplate = require('./folder_gens/root/package_template')
let serverTemplate = require('./folder_gens/root/server_template')
let indexFileTemplate = require('./folder_gens/root/index_template')
let routeFileTemplate = require('./folder_gens/routes/route_template')
let controllerClassFile = require('./folder_gens/controllers/controller_superclass')
let controllerFileTemplate = require('./folder_gens/controllers/controller_template')
let modelClassFile = require('./folder_gens/models/file_model_superclass')
let modelFileTemplate = require('./folder_gens/models/file_model_template')

function multipleFiles(zip, folderName, extension, resourceArr, inputOrCallback) {
    resourceArr.forEach(resource => zip.file(`${folderName}/${resource.name}.${extension}`, typeof inputOrCallback === 'string' ? inputOrCallback : inputOrCallback(resource)))
}

function createBE(bEObject) {
    let zip = new JSZip
    let root = bEObject.name
    zip.folder(root).file(`package.json`, packageTemplate(bEObject)).file(`server.js`, serverTemplate(bEObject.resources))
    zip.file(`${root}/routes/index.js`, indexFileTemplate(bEObject.resources, 'Router'))
    multipleFiles(zip, `${root}/routes`, 'js', bEObject.resources, routeFileTemplate)
    zip.file(`${root}/controllers/index.js`, indexFileTemplate(bEObject.resources, 'Controller'))
    zip.file(`${root}/controllers/controller.js`, controllerClassFile)
    multipleFiles(zip, `${root}/controllers`, 'js', bEObject.resources, controllerFileTemplate)
    zip.file(`${root}/models/index.js`, indexFileTemplate(bEObject.resources, 'Controller'))
    zip.file(`${root}/models/model.js`, modelClassFile)
    multipleFiles(zip, `${root}/models`, 'js', bEObject.resources, modelFileTemplate)
    multipleFiles(zip, `${root}/database`, 'json', bEObject.resources, '[]')
    return zip
}


module.exports = createBE

// let apiObject = require('./backend-generator-object')
// let serverZip = createBE(apiObject)
// serverZip
//     .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
//     .pipe(fs.createWriteStream(`./${apiObject.name}Server.zip`))
//     .on('finish', function () {
//         // JSZip generates a readable stream with a "end" event,
//         // but is piped here in a writable stream which emits a "finish" event.
//         console.log(`${apiObject.name}Server.zip has been created!`);
//     });