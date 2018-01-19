var now = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`

let backendObject = {
    name: `vet_api`,
    userTypes: [`guest`, `client`, `employee`, `admin`],//Error if null/undefined
    resources: [
        {
            name: `veterinarians`,
            requiredFields: [],
            optionalFields: [],
            routes: [
                {
                    name: 'getOneVet',
                    method: 'GET',
                    all: false,
                    permissions: [`guest`, `client`, `employee`, `admin`],
                },
                {
                    name: 'getAllVets',
                    method: 'GET',
                    all: true,
                    permissions: [`guest`, `client`, `employee`, `admin`]
                },
                {
                    name: 'createVet',
                    method: 'POST',
                    permissions: ['employee']
                },
                {
                    name: 'replaceVet',
                    method: 'PUT',
                    all: false,
                    permissions: ['employee']
                },
                {
                    name: 'alterVet',
                    method: 'PATCH',
                    all: false,
                    permissions: ['employee']
                },
                {
                    name: 'removeVet',
                    method: 'DELETE',
                    all: false,
                    permissions: ['employee']
                }
            ]
        },
        {
            name: `clients`,
            routes: [
                {
                    name: 'getOneClient',
                    method: 'GET',
                    all: false,
                    permissions: [`employee`, `admin`],
                },
                {
                    name: 'getAllClients',
                    method: 'GET',
                    all: true,
                    permissions: [`employee`, `admin`]
                },
                {
                    name: 'createClient',
                    method: 'POST',
                    permissions: ['employee']
                },
                {
                    name: 'replaceClient',
                    method: 'PUT',
                    all: false,
                    permissions: ['employee']
                },
                {
                    name: 'alterClient',
                    method: 'PATCH',
                    all: false,
                    permissions: ['employee']
                },
                {
                    name: 'removeClient',
                    method: 'DELETE',
                    all: false,
                    permissions: ['employee']
                }
            ]
        },
        {
            name: `animals`,
            routes: [
                {
                    name: 'getOneAnimal',
                    method: 'GET',
                    all: false,
                    permissions: [`the_client`, `employee`, `admin`],
                },
                {
                    name: 'getAllAnimals',
                    method: 'GET',
                    all: true,
                    permissions: [`employee`, `admin`]
                },
                {
                    name: 'createAnimal',
                    method: 'POST',
                    permissions: ['employee']
                },
                {
                    name: 'replaceAnimal',
                    method: 'PUT',
                    all: false,
                    permissions: ['employee']
                },
                {
                    name: 'alterAnimal',
                    method: 'PATCH',
                    all: false,
                    permissions: ['employee']
                },
                {
                    name: 'removeAnimal',
                    method: 'DELETE',
                    all: false,
                    permissions: ['employee']
                }
            ] //if routes is undefined, make basic 6 routes.
        },
        {
            name: `appointments`,
            routes: [
                {
                    name: 'getOneAppointment',
                    method: 'GET',
                    all: false,
                    permissions: [`the_client`, `employee`, `admin`],
                },
                {
                    name: 'getAllAppointments',
                    method: 'GET',
                    all: true,
                    permissions: [`employee`, `admin`]
                },
                {
                    name: 'createAppointment',
                    method: 'POST',
                    permissions: ['employee']
                },
                {
                    name: 'replaceAppointment',
                    method: 'PUT',
                    all: false,
                    permissions: ['employee']
                },
                {
                    name: 'alterAppointment',
                    method: 'PATCH',
                    all: false,
                    permissions: ['employee']
                },
                {
                    name: 'removeAppointment',
                    method: 'DELETE',
                    all: false,
                    permissions: ['employee', `the_client`]
                }
            ]
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
                name: `veterinarians`,
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

module.exports = backendObject