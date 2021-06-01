const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
require('dotenv').config();
require('./ddbb/mongoose.config');

const server = express();
const port = process.env.PORT || 4000;

server.use(cors());
server.use(express.json());

server.use(morgan('tiny'));
const tasksRouter = require('./routes/taskRouter');

server.use('/api/tasks', tasksRouter);

server.listen(port, () => debug(`Server is running in ${chalk.blue(port)}`));
