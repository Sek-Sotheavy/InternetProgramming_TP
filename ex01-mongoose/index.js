var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()
// const port = 3001;

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('./config/db')()
app.use(require('./router'));

app.listen(process.env.PORT || 3001, () => console.log("App on http://localhost:3001"));