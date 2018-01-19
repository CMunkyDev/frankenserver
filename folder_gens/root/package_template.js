function generatePackageTemplate (backendObject) {
    return `
            {
                "name": "${backendObject.name}",
                "version": "1.0.0",
                "description": "",
                "main": "index.js",
                "scripts": {
                    "start": "node server.js"
                },
                "author": "${process.env.PROJECT_NAME}",
                "license": "ISC",
                "dependencies": {
                    "body-parser": "^1.18.2",
                    "cors": "^2.8.4",
                    "dotenv": "^4.0.0",
                    "express": "^4.16.2",
                    "jsonwebtoken": "^8.1.0",
                    "knex": "^0.14.2",
                    "morgan": "^1.9.0",
                    "pg": "^7.4.1",
                    "bcrypt-as-promised": "^1.1.0"
                }
            }
        `
}
module.exports = generatePackageTemplate