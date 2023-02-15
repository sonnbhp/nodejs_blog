const express = require('express')
const exphbs = require('express-handlebars');

const app = express()
const port = 3000


app.engine('.handlebars', exphbs.engine());

app.set('view engine', '.handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})