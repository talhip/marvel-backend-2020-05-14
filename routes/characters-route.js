const express = require("express");
const router = express.Router();
const axios = require("axios");
const createHash = require("../hash");

router.get("/characters", async (req, res) => {
  const search = req.query.nameStartsWith;
  const offset = req.query.offset;
  let hash = createHash();
  try {
    if (search) {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?${hash}&limit=100&offset=${offset}&nameStartsWith=${search}`
      );
      res.json(response.data);
    } else {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?orderBy=name&${hash}&limit=100&offset=${offset}`
      );
      res.json(response.data);
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
