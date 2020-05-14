require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hi Marvel !" });
});

const charactersRoute = require("./routes/characters-route");
app.use(charactersRoute);

const favoriteCharacterRoute = require("./routes/favorite-character-route");
app.use(favoriteCharacterRoute);

const comicsRoute = require("./routes/comics-route");
app.use(comicsRoute);

app.all("*", function (req, res) {
  res.json({ message: "all routes" });
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
