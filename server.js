const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req,res) => {
    res.send("I am working")
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("connected at port: " + port)
})