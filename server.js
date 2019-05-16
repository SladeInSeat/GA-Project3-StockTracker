const express = require('express')
const app = express()
const routes = require('./routes/index')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', routes)

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("connected at port: " + port)
})