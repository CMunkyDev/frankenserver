function generateRoute(routeObject, resourceName) {
    let method = routeObject.method.toLowerCase()
    console.log('NAME',routeObject.name)
    return `router.${method}('/${method !== 'post' && !routeObject.all && routeObject.name.toLowerCase() !== 'index' ? ':id' : ''}', /*${routeObject.permissions ? `authController.verifyToken, ` : ''}${routeObject.permissions ? `authController.allowOnly(${routeObject.permissions.map(perm => `\'${perm}\'`).join(',')}), ` : ''}*/ ${resourceName}Controller.${routeObject.name})`
}


function routeFileTemplate (resource) {
    let routes = ``
    resource.routes.forEach(route => routes += generateRoute(route, resource.name)+`\n`)
    return `const router = require('express').Router()
const ${resource.name}Controller = require('../controllers/${resource.name}.js')
//const AuthController = require('../controllers/auth.js')
// const pruneKeys = require('../fields.js')('prune')
// const completeKeys = require('../fields.js')('complete')

${routes}

module.exports = router
`
}

module.exports = routeFileTemplate