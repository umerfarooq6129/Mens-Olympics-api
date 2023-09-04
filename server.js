const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
require('./src/db/conn');
// const MensRanking =require("./src/models/mens");
const router = require("./src/routes/routes")

app.use(express.json());

app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`listening to port ${port}!`);
});
