const express = require('express')
const hbs = require('hbs')

const users = require('./data/users')

const app = express()

// Configure the public folder, for css js and .png
app.use(express.static('public'))

//Configure handlebars
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

//Configure endpoints

app.get('/', (req, res, next) => {
  res.render('index')
})

app.get('/users', (req, res, next) => {
  let usersList = [...users]

  if (req.query.users) {
    usersList = usersList.filter(user => user.name.toLocaleLowerCase().includes(req.query.users))
  }

  res.render('users', { users: usersList })
})

app.get('/users/:id', (req, res, next) => {
  const foundUser = users.find(user => user.id === Number(req.params.id))

  res.render('userDetail', { user: foundUser })
})

//App port

app.listen(3000, () => console.log('Listening on port 3000'))