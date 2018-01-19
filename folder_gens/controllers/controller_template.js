function controllerFileTemplate (resource) {
    return `const Controller = require('./controller.js')('${resource.name}')
const Model = require(\`../models/${resource.name}.js\`)


class ${resource.name}Controller extends Controller {
    //insert Controller methods here.
}

module.exports = ${resource.name}Controller`
}

module.exports = controllerFileTemplate