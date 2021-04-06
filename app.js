const express = require("express");
const path = require("path");
const app = express();
const scraper = require("./scraper.js");
const cors = require("cors");

app.use(express.static("public"));
app.use(cors({
    origin: "*"
}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/api/:bin", function (req, res) {
    scraper
        .scrape(req.params.bin)
        .then(function (data) {
            res.set("Cache-Control", "public, max-age=86400");
            res.end(data);
        })
        .catch(function (e) {
            res.status(500, {
                error: e
            });
        });
});

app.use(function (req, res) {
    res.redirect(301, "/");
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
