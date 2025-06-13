const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config();

const app = express();
app.use(cors());

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My News API Proxy',
      version: '1.0.0',
    },
    servers: [{ url: 'http://localhost:3001' }],
  },
  apis: ['./index.js'], // where the comments live
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /news/sources:
 *   get:
 *     summary: Get news sources from Colombia (via NewsAPI)
 *     responses:
 *       200:
 *         description: A list of news sources
 */
app.get('/news/sources', async (req, res) => {
  const apiKey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines/sources?language=es&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const filtered = data.sources.filter((s) => s.country === 'co');
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(3001, () => console.log('Running on http://localhost:3001'));
