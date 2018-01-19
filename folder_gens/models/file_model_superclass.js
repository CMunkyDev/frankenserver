module.exports = `const uuid = require('uuid/v4')
const fs = require('fs')

module.exports = (resourceName) => {

    let filepath = \`../database/\${resourceName}.json\`

    function writeClosure (returnData) {
        return function (err) {
            if (err) return next({status: 500, message:err.message})
            return returnData
        }
    }

    class Model {

        static all() {
            return fs.readFile(filepath, (err, data) => {
                if (err) throw new Error(err)
                return data
            })
        }

        static one(id) {
            return fs.readFile(filepath, (err, data) => {
                if (err) throw new Error(err)
                return data.find(row => row.id === id) || next({status: 404, message: \`\${resourceName} with id \${id} not found\`})
            })
        }

        static make(body) {
            return fs.readFile(filepath, (err, data) => {
                if (err) throw new Error(err)
                body.id = uuid()
                data.push(body)
                return fs.writeFile(filepath, data, writeClosure(body))
            })
        }

        static alter(id, body) {
            return fs.readFile(filepath, (err, data) => {
                if (err) throw new Error(err)
                let row = data.findIndex(row => row.id === id)
                if (~row) return next({ status: 404, message: \`\${resourceName} with id \${id} not found\` })
                data[row] = Object.assign(data[row], body)
                return fs.writeFile(filepath, data, writeClosure(data[row]))
            })
        }

        static destroy(id) {
            return fs.readFile(filepath, (err, data) => {
                if (err) throw new Error(err)
                let row = data.findIndex(row => row.id === id)
                if (~row) return next({ status: 404, message: \`\${resourceName} with id \${id} not found\` })
                let deleted = data.splice(row, 1)
                return fs.writeFile(filepath, data, writeClosure(data[0]))
            })
        }
    }

    return Model
}
`