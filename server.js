const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    
    var today = new Date()
    if (today.getDay() === 6 || today.getDay() === 0) {
        res.send('yay its the weekend')
    } else {
        res.send('sadly its a working day')
    }

})



app.listen(PORT, () => {
    console.log(`Todo app listening at http://localhost:${PORT}`)
})