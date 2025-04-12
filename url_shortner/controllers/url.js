const shortId = require("shortid");
const URL = require("../models/url");
const shortid = require("shortid");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url)
    return res.status(400).json({
      message: "URL is required",
    });
  const shortId = shortid(8);
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({
    message: "Success",
    shortUrl: `http://localhost:3000/${shortId}`,
  });
}

module.exports = {
  handleGenerateNewShortUrl,
};
