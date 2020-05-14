const md5 = require("md5");

const privateKey = process.env.PRIVATE_API_KEY;
const publicKey = "7068aee1638c490ce0c31cd87c159ee7";

const date = new Date();
const timestamp = date.getTime() / 1000;
const ts = Math.floor(timestamp);

const hash = md5(ts + privateKey + publicKey);

const createHash = () => {
  let urlHash = "";
  urlHash = `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  return urlHash;
};

module.exports = createHash;
