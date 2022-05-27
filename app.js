// @ts-check
const express = require("express");
const path = require("path");
const cors = require("cors");
const { binLookup } = require("@arnabxd/bin-lookup/lib");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", async (_, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/api/:bin", async (req, res) => {
  try {
    let data = await binLookup(req.params.bin, "bins.su");
    res.set("Cache-Control", "public, max-age=86400");
    res.type("application/json");
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.use(async (_, res) => {
  res.redirect(301, "/");
});

app.listen(PORT, () => console.log(`Server is running... [PORT : ${PORT}]`));
