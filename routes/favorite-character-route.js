const express = require("express");
const router = express.Router();
const axios = require("axios");
const createHash = require("../hash");

router.get("/favoritecharacter", async (req, res) => {
  const id = req.query.id;
  let hash = createHash();
  try {
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters/${id}?${hash}`
    );
    res.json(response.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
