const express = require('express');
const morgan = require('morgan');
const app = express();
const fs = require('fs');
const PORT = 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => {
    fs.createReadStream('today.html').pipe(res);
});

app.get('/today/', (req, res) => {
    fs.createReadStream('today.html').pipe(res);
});

app.get('/yesterday/', (req, res) => {
    fs.createReadStream('yesterday.html').pipe(res);
});

try {
    app.listen(PORT);
    console.log(`Started server at ${PORT}`);
} catch(e) {
    console.error(e);
}
