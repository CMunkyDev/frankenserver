function fileModelTemplate (resource) {
    return `const Model = require('./model.js')(\`${resource.name}\`)

class ${resource.name}Model extends Model{
    //insert ${resource.name}-specific model methods here
}

module.exports = ${resource.name}Model`
}

module.exports = fileModelTemplate