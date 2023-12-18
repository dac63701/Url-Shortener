const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require('./models/shortUrl');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/urlShortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('connected'))

app.get("/api/getLinks", async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const authToken = authHeader.split(' ')[1];
  
  const urls = await ShortUrl.find({ user: authToken });
  console.log(urls)
  return res.json(urls);
});

app.post("/api/createLink", async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const authToken = authHeader.split(' ')[1];

  await ShortUrl.create({ full: req.body.fullUrl, user: authToken });

  const shortUrl = await ShortUrl.findOne({full: req.body.fullUrl, user: authToken});
  
  return res.json({ fullUrl: shortUrl.full, shortUrl: shortUrl.short });
})

app.get("/api", (req, res) => {
  res.json({ message: "It's Working!" });
});

process.on('uncaughtException', function (err) {
  console.log(err);
}); 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});