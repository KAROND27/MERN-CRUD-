const express = require('express');
require('dotenv').config();
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./db/connect');
const Data = require('./models/Schema');
const roote = require('../server/routes/route');
app.use(roote);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
