function generateServerTemplate (resourcesArr) {
    let resourceRoutes = ``
    resourcesArr.forEach(resource => resourceRoutes += `app.use('/api/${resource.name}', ${resource.name} )\n        `)
    let routerDestructure = `const {\n        `
    resourcesArr.forEach(resource =>  routerDestructure += `    ${resource.name}Router: ${resource.name},\n        `)
    routerDestructure += `} = require('./routes')`
    return `
        require('dotenv').load()
        const express = require('express')
        const app = express()
        const cors = require('cors')
        const port = process.env.PORT || 3000
        const bodyParser = require('body-parser')
        const morgan = require('morgan')
        const path = require('path')

        ${routerDestructure}

        app.use(cors())
        app.use(bodyParser.json())
        app.use(morgan('dev'))
        
        ${resourceRoutes}

        app.use((req, res) => {
            const status = 404
            const message = \`Could not \${ req.method } \${ req.path }\`
            res.status(status).json({ status, message })
        });

        app.use((err, _req, res, _next) => {
            console.error(err)
            const status = err.status || 500
            const message = err.message || 'Something went wrong!'
            res.status(status).json({ message, status })
        })

        app.listen(port, () => {
            console.log('listening on port', port)
        })
    `
}

module.exports = generateServerTemplate