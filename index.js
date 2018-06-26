const express = require('express');
const app = express();
const morgan = require('morgan');
const { port, env } = require('./config/environment');
const routes = require('./config/routes');
const errorHandler = require('./lib/errorHandler');

if(env === 'development') app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use(errorHandler);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
