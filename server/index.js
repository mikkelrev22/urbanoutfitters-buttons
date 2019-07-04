const express = require('express');
const bodyParser = require('body-parser');
const Schema = require('../db/Schema.js');
const app = express();
const PORT = 5152;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});