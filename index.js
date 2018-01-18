var now = `${Date().getFullYear()}-${Date().getMonth() + 1}-${Date().getDate()}`
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

let backendObject = {
    name: `vet_api`,
    userTypes: [`guest`, `client`, `employee`, `admin`],//Error if null/undefined
    resources: [
        {
            name: `veterinarians`,
            routes: {
                getOne: [`guest`, `employee`, `admin`], //OR null (unprotected)
                getAll: [`guest`, `employee`, `admin`], //OR null (unprotected)
                post: [`employee`], //OR null (unprotected)
                put: [`employee`], //OR null (unprotected)
                patch: [`employee`], //OR null (unprotected)
                delete: [`employee`], //OR null (unprotected)
            }
        },
        {
            name: `clients`,
            routes: {
                getOne: [`employee`, `admin`], //OR null (unprotected)
                getAll: [`employee`, `admin`], //OR null (unprotected)
                post: [`employee`], //OR null (unprotected)
                put: [`employee`], //OR null (unprotected)
                patch: [`employee`], //OR null (unprotected)
                delete: [`employee`], //OR null (unprotected)
            } //if routes is undefined, make basic 6 routes.
        },
        {
            name: `animals`,
            routes: {
                getOne: [`the_client`, `employee`, `admin`], //OR null (unprotected)
                getAll: [`employee`, `admin`], //OR null (unprotected)
                post: [`employee`], //OR null (unprotected)
                put: [`employee`], //OR null (unprotected)
                patch: [`employee`], //OR null (unprotected)
                delete: [`employee`], //OR null (unprotected)
            } //if routes is undefined, make basic 6 routes.
        },
        {
            name: `appointments`,
            routes: {
                getOne: [`the_client`, `employee`, `admin`], //OR null (unprotected)
                getAll: [`employee`, `admin`], //OR null (unprotected)
                post: [`employee`], //OR null (unprotected)
                put: [`employee`], //OR null (unprotected)
                patch: [`employee`], //OR null (unprotected)
                delete: [`the_client`, `employee`], //OR null (unprotected)
            } //if routes is undefined, make basic 6 routes.
        },
        {
            name: `adoptions`,
            routes: {
                adopt: [`client`] //OR null (unprotected)
            } //if routes is undefined, make basic 6 routes.
        }
    ],
    database: {
        name: `vet_db`,
        tables: [
            {
                name: `appointments`,
                forResource: `appointments`,
                columns: [
                    {
                        type: `integer`,
                        label: `client_id`,
                        nullable: false,
                        references: {
                            table: `clients`,
                            column: `id`
                        }
                    },
                    {
                        type: `integer`,
                        label: `pet_id`,
                        nullable: false,
                        references: {
                            table: `animals`,
                            column: `id`
                        }
                    },
                    {
                        type: `integer`,
                        label: `vet_id`,
                        nullable: false,
                        references: {
                            table: `veterinarians`,
                            column: `id`
                        }
                    },
                    {
                        type: `date`,
                        label: `date`,
                        nullable: false
                    },
                    {
                        type: `time`,
                        label: `time`,
                        nullable: false
                    },
                    {
                        type: `float`,
                        label: `cost`,
                        nullable: true,
                        defaultsTo: 0.00
                    },
                    {
                        type: `bool`,
                        label: `complete`,
                        nullable: true,
                        defaultsTo: false
                    },
                    {
                        type: `string`,
                        label: `notes`,
                        nullable: true,
                        defaultsTo: ``
                    }
                ]
            },
            {
                name:`veterinarians`,
                forResource: `veterinarians`,
                columns: [
                    {
                        type: `string`,
                        label: `first_name`,
                        nullable: false,
                        defaultsTo: ``
                    },
                    {
                        type: `string`,
                        label: `last_name`,
                        nullable: false,
                        defaultsTo: ``
                    },
                    {
                        type: `string`,
                        label: `suffix`,
                        nullable: true,
                        defaultsTo: ``
                    },
                    {
                        type: `date`,
                        label: `hired_on`,
                        nullable: false,
                    },
                    {
                        type: `date`,
                        label: `graduated`,
                        nullable: true
                    },
                    {
                        type: `string`,
                        label: `specialization`,
                        nullable: true,
                        defaultsTo: ``
                    }
                ]
            },
            {
                name: `clients`,
                forResource: `clients`,
                columns: [
                    {
                        type: `string`,
                        label: `last_name`,
                        nullable: false,
                        defaultsTo: ``
                    },
                    {
                        type: `string`,
                        label: `first_name`,
                        nullable: false,
                        defaultsTo: ``
                    },
                    {
                        type: `date`,
                        label: `joined`,
                        nullable: true,
                        defaultsTo: now
                    },
                ]
            },
            {
                name: `animals`,
                forResource: `animals`,
                columns: [
                    {
                        type: `integer`,
                        label: `client_id`,
                        nullable: true,
                        references: {
                            table: `clients`,
                            column: `id`
                        }
                    },
                    {
                        type: `string`,
                        label: `name`,
                        nullable: false,
                        defaultsTo: ``
                    },
                    {
                        type: `string`,
                        label: `breed`,
                        nullable: true,
                        defaultsTo: ``
                    },
                    {
                        type: `float`,
                        label: `weight`,
                        nullable: true,
                        defaultsTo: 0.00
                    },
                    {
                        type: `date`,
                        label: `birthday`,
                        nullable: true
                    },
                    {
                        type: `string`,
                        label: `notes`,
                        nullable: true,
                        defaultsTo: ``
                    }
                ]
            }
        ]
    } //OR null OR database object: if false/null no database
}