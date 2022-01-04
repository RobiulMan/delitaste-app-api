const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

/**
 * SWAGGER API DOC CONFIGER
 */
const customizeSwaggerUi = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'DeliTest',
    customfavIcon: '/assets/favicon.ico'
};

const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'API DeliTest',
            version: '1.0.0',
            description: 'The DeliTest API docment.'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },

    apis: ['./doc/*.js']
};

const specs = swaggerJsDoc(options);

const apiDoc = (app) => {
    app.use('/api-v1/', swaggerUi.serve, swaggerUi.setup(specs, customizeSwaggerUi));
};

module.exports = apiDoc;
