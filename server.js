
var express = require('express');
var app = express();

const data = require('./data.json');

app.use('/static', express.static('assets'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/data', function(req, res) {
    res.status(200).json(data);
});

app.get('/barcode/:id', function(req, res) {
    console.log(req.params.id)
    if (typeof data[req.params.id] !== 'undefined') {
        res.status(200).json({
            data: data[req.params.id],
            message: "barcode item info"
        });
    } else {
        res.status(201).json({
            data: {},
            message: "no barcode item info"
        });
    }
});

app.listen(2020);
console.log('2020 is the magic port');