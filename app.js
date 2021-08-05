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
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`)
});

const rootController = require('./routes/index');
const proxyController = require('./routes/proxy');
const jobsController = require('./routes/jobs');

app.use('/', rootController);
app.use('/proxy', proxyController);
app.use('/jobs', jobsController);
