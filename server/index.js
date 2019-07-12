const express = require('express');
const bodyParser = require('body-parser');
const Schema = require('../db/Schema.js');
const app = express();
const PORT = 5152;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/data/:id', (req, res) => {
  Schema.find({id: req.params.id}, (err, data) => {
    if (err) res.status(500).send(err);
    res.status(200).send(data);
  })
});

// app.post('/data', (req, res) => {
//   console.log(req.body);
//   const { color, size, qty } = req.body;
//   Schema.create({color, size, qty}, (err, data) => {
//     if (err) res.status(500).send(err);
//     res.status(200).send(data);
//   })
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});