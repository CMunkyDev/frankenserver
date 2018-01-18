```JavaScript

let objectOutline = {
    name: `string`,
    userTypes: [`stringType1`, `stringType2`, `stringType3`],//Error if null/undefined
    resources: [
        {
            name: 'string',
            routes: {
                getOne: [`strings matching usertypes`], //OR null (unprotected)
                getAll: [`strings matching usertypes`], //OR null (unprotected)
                post: [`strings matching usertypes`], //OR null (unprotected)
                put: [`strings matching usertypes`], //OR null (unprotected)
                patch: [`strings matching usertypes`], //OR null (unprotected)
                delete: [`strings matching usertypes`], //OR null (unprotected)
                anyRouteName: [`strings matching usertypes`] //OR null (unprotected)
            } //if routes is undefined, make basic 6 routes.
        }
    ],
    database: false, //OR null OR database object: if false/null no database
}
let database = {
    name: `string`,
    tables: [{
        name: `string`,
        forResource: `resourceString`,
        columns: [{
                type: `string`,
                label: `string`,
                nullable: true,
                defaultsTo: `matches type`
                //rawSQL?
            }]
        }]
}

```