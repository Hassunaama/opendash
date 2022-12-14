const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')
const cors = require('cors')
const csrf = require("csurf");

app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(csrfMiddleware);

app.get('/', (req, res) => {
    res.send('u are in the wrong place, you should be at opendash.netlify.com or at /api/.')
})

app.get('/api/', (req, res) => {
    res.status(404).send('<h1>nope.</h1>')
})

/*app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}`)
    console.log(`http://localhost:${port}/api/`)
})*/
