'use strict';

const http = require('http');
const hostname = '127.0.0.1';
const port = 3333;

const cors = require('cors');

const express = require('express');
const app = express();

const es6renderer = require('express-es6-template-engine');
app.engine('html', es6renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(cors());

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`)
});

const rootController = require('./routes/index');
const proxyController = require('./routes/proxy');

app.use('/', rootController);
app.use('/proxy', proxyController);
