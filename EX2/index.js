const express = require('express')
const fs = require('fs');
const app = express()

app.get('/', function (req, res) {
  fs.readFile('./src/ex2-List&View.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    res.send(data);
  });
})

app.get('/detail', function (req, res) {
  res.send('Hello from api in detail')
})

app.listen(3000, () => {
  console.log("Your project is running on port: 3000");
});