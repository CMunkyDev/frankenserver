# FrankenServer
## FrankenServer is an npm package that generates an API in a ZIP folder based on an input object.

# NOTES:
* CURRENTLY FrankenServer does NOT:
    - Support Databases; FrankenServer creates JSON files that it reads and writes from to store data.
    - Allow for custom routes. Current Routes: Get One, Get All, Create, Put, Patch, Delete
    - Support Authentication/Authorization
    
    **I intend to add these functionalities in the future**

# To Install:
```JavaScript
npm install frankenserver
npm install jszip
```

# To Generate API Server ZIP in Current Folder:
```JavaScript
const frankenserver = require('frankenserver')
let apiObject = /* SEE API Object SECTION IN README */
frankenserver(apiObject, {toFile: true})
```

# API Object:
 - api object MUST be in this same format:
```JavaScript
{
    name: `my_api`, //string that will be the name of your API folder
    resources: [ //resources is an array of resource objects. There can be as many resource objects as you'd like
        { 
            name: `veterinarians`,
            routes: [
                {
                    name: 'show', //currently names of GET ONE routes must be 'show'
                    method: 'GET'
                },
                {
                    name: 'index', //currently names of GET ALL routes must be index
                    method: 'GET'
                },
                {
                    name: 'create', //currently names of POST routes must be create
                    method: 'POST'
                },
                {
                    name: 'update', //currently names of put/patch routes must be update
                    method: 'PUT'
                },
                {
                    name: 'update', //currently names of put/patch routes must be update
                    method: 'PATCH'
                },
                {
                    name: 'delete', //currently names of delete routes must be delete
                    method: 'DELETE'
                }
            ]
        }
    ],
}
```