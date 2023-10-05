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

app.get("/getLinks", async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const authToken = authHeader.split(' ')[1];
  console.log(authToken);

  const shortUrl = await ShortUrl.findOne({ user: authToken })

});

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

process.on('uncaughtException', function (err) {
  console.log(err);
}); 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});