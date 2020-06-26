var express = require('express');
const path = require('path');
var app = express();
var scraper = require('./scraper.js');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './assets/index.html'));
    })

app.get('/api/:bin', function (req, res) {
    scraper.scrape(req.params.bin)
    .then(function (data) {
        res.end(data);
    })
    .catch(function (e) {
        res.status(500, {
            error: e
        });
    });
});

app.use(function (req,res,next){
	res.redirect(301,'/');
});

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running...",));