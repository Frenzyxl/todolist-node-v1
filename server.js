const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})



app.listen(PORT, () => {
    console.log(`Todo app listening at http://localhost:${PORT}`)
})