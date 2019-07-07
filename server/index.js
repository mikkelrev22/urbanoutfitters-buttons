const express = require('express');
const bodyParser = require('body-parser');
const Schema = require('../db/Schema.js');
const app = express();
const PORT = 5152;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

let randomId = function (){
  return Math.floor(Math.random() * 100) + 1  
}

app.get('/data', (req, res) => {
  Schema.find({id: randomId()}, (err, data) => {
      console.log(data)
    if (err) res.status(500).send(err);
    res.status(200).send(data);
  })
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});