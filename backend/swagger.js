const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'News Proxy API',
      version: '1.0.0',
      description: 'A simple Express API to fetch news and document with Swagger',
    },
    servers: [{ url: 'http://localhost:3001' }],
  },
  apis: ['./index.js'],
};

module.exports = swaggerJSDoc(options);
