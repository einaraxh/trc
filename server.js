const express = require('express')
const app = express()

app.use(express.urlencoded( { extended: true } ))
//app.use('/css', express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    console.log(req.body.input)

    switch (req.body.input.toLowerCase().split(" ").join("")) {
        case "italiangame":
            res.render('object1')
            break
        case "81863733380":
            res.render('countdown')
            break
        default:
            res.render('index')
    }



})

app.listen(3000)

const table = {
    "enigma"    :   "object1"
}