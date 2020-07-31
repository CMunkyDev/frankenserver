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
        "body-parser": "^1.18.2",
        "cors": "^2.8.4",
        "dotenv": "^4.0.0",
        "express": "^4.16.2",
        "morgan": "^1.9.0",
        "uuid": "^3.2.1"
    }
}
`
}
module.exports = generatePackageTemplate