const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

const PORT = 3000

let items = ["Buy Food", "Cook Food", "Eat Food"]

app.get('/', (req, res) => {
    let today = new Date()
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day = today.toLocaleDateString("en-US", options)

    res.render('list', {kindOfDay: day, newTodo: items})
})

app.post('/', (req, res) => {
    let todo = req.body.todo
    items.push(todo)

    res.redirect('/')
})



app.listen(PORT, () => {
    console.log(`Todo app listening at http://localhost:${PORT}`)
})