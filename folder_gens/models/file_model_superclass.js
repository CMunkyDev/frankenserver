module.exports = `const uuid = require('uuid/v4')
const fs = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

module.exports = (resourceName) => {

    let filepath = \`./database/\${resourceName}.json\`

    class Model {

        static all() {
            return readFileAsync(filepath, 'utf8')
                .then(data => {
                    return JSON.parse(data)
                })
                // .catch(err => {
                //     next({status: 500, message: err.message})
                // })
        }

        static one(id) {
            return readFileAsync(filepath, 'utf8')
                .then(data => {
                    return JSON.parse(data).find(row => row.id === id) || next({status: 404, message: \`\${resourceName} with id \${id} not found\`})
                })
                // .catch(err => {
                //     next({status: 500, message: err.message})
                // })
        }

        static make(body) {
            return readFileAsync(filepath, 'utf8')
                .then(data => {
                    body.id = uuid()
                    data = JSON.parse(data)
                    data.push(body)
                    return writeFileAsync(filepath, JSON.stringify(data))
                        .then(() => {
                            return body
                        })
                })
                // .catch(err => {
                //     next({status: 500, message: err.message})
                // })
        }

        static alter(id, body) {
            return readFileAsync(filepath, 'utf8')
                .then(data => {
                    data = JSON.parse(data)
                    let row = data.findIndex(row => row.id === id)
                    if (~row) return next({ status: 404, message: \`\${resourceName} with id \${id} not found\` })
                    data[row] = Object.assign(data[row], body)
                    return writeFileAsync(filepath, JSON.stringify(data))
                        .then(() => {
                            return data[row]
                        })
                })
                // .catch(err => {
                //     next({status: 500, message: err.message})
                // })
        }

        static destroy(id) {
            return fs.readFile(filepath, 'utf8')
                .then(data => {
                    data = JSON.parse(data)
                    let row = data.findIndex(row => row.id === id)
                    if (~row) return next({ status: 404, message: \`\${resourceName} with id \${id} not found\` })
                    let deleted = data.splice(row, 1)
                    return fs.writeFile(filepath, JSON.stringify(data))
                        .then(() => {
                            return deleted[0]
                        })
                })
                // .catch(err => {
                //     next({status: 500, message: err.message})
                // })
        }
    }

    return Model
}
`