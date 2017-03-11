const express = require('express');
const morgan = require('morgan');
const app = express();
const fs = require('fs');
const PORT = 3000;

app.use(morgan('combined'));

//const FIRST = 'today.html';
//const SECOND = 'yesterday.html';

const FIRST = 'yesterday.html';
const SECOND = 'today.html';

app.get('/og/', (req, res) => {
    res.set('Content-Type', 'text/html');
    fs.createReadStream(FIRST).pipe(res);
});

app.get('/og/today/', (req, res) => {
    res.set('Content-Type', 'text/html');
    fs.createReadStream(FIRST).pipe(res);
});

app.get('/og/yesterday/', (req, res) => {
    res.set('Content-Type', 'text/html');
    fs.createReadStream(SECOND).pipe(res);
});

try {
    app.listen(PORT);
    console.log(`Started server at ${PORT}`);
} catch(e) {
    console.error(e);
}
