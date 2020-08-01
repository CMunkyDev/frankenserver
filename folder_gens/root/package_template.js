function generatePackageTemplate (backendObject) {
    return `{
    "name": "${backendObject.name.toLowerCase()}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "node server.js"
    },
    "author": "frankenserver",
    "license": "ISC",
    "dependencies": {
        "body-parser": "^1.19.0",
        "cors": "^2.8.5",
        "dotenv": "^8.2.0",
        "express": "^4.17.1",
        "morgan": "^1.10.0",
        "uuid": "^8.3.0"
    }
}
`
}
module.exports = generatePackageTemplate