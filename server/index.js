'use strict'

require('dotenv').config();

const corsConfig = { methods: ['GET', 'POST'] };
const serverConfig = { logger: true };
const loaderConfig = { paths: ['./routes/*.route.js'], name: 'server' };
const helmetConfig = { frameguard: { action: 'sameorigin' } };

const server = require('fastify')(serverConfig);
const cors = require('fastify-cors');
const loader = require('fastify-loader');
const fileUpload = require('fastify-file-upload');
const helmet = require('fastify-helmet');

server.register(cors, corsConfig);
server.register(loader, loaderConfig);
server.register(fileUpload);
server.register(helmet, helmetConfig);

server.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

server.listen(process.env.SERVER_HTTP_PORT, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(`server listening on ${address}:${process.env.SERVER_HTTP_PORT}`);
});