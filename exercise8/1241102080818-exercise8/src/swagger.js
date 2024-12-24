const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'SensorData and User API',
            version: '1.0.0',
            description: 'API for managing SensorData and User entities',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Exercise 8 IoT',
            },
        ],
        components: {
            schemas: {
                SensorData: {
                    type: 'object',
                    properties: {
                        Id: {
                            type: 'integer',
                            description: 'Auto-generated ID of the sensor data',
                        },
                        SensorName: {
                            type: 'string',
                            description: 'Name of the sensor',
                        },
                        SensorValue: {
                            type: 'number',
                            description: 'Value recorded by the sensor',
                        },
                    },
                    required: ['SensorName', 'SensorValue'],
                },
                User: {
                    type: 'object',
                    properties: {
                        Id: {
                            type: 'integer',
                            description: 'Auto-generated ID of the user',
                        },
                        UserName: {
                            type: 'string',
                            description: 'Name of the user',
                        },
                        Password: {
                            type: 'string',
                            description: 'Password of the user',
                        },
                        Email: {
                            type: 'string',
                            description: 'Email address of the user',
                        },
                    },
                    required: ['UserName', 'Password', 'Email'],
                },
            },
        },
    },
    apis: ['./routes/*.js'], // Path to the route files
};

// Initialize Swagger docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = {
    swaggerUi,
    swaggerDocs,
};
