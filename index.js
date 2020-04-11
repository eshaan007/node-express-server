const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');
const dishRouter = require('./routes/dishRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/leaders', leaderRouter);
app.use('/promotions', promoRouter);
app.use('/dishes', dishRouter);

app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h4> Express Server </h4></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}`)
});