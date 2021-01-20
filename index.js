require('dotenv').config()

const express = require('express')
const hbs = require('hbs')

const users = require('./data/users')

const app = express()

//Configure body-parser

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Configure the public folder, for css js and .png
app.use(express.static('public'))

//Configure handlebars
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Fake middleware

function fakeMiddleware() {
  console.log('Fake middleware was called')
}

app.use((req, res, next) => {
  req.body.channel = 'web app'
  fakeMiddleware()
  next()
})

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

app.get('/users/new', (req, res, next) => {
  res.render('newUser')
})

app.get('/users/:id', (req, res, next) => {
  const foundUser = users.find(user => user.id === Number(req.params.id))

  res.render('userDetail', { user: foundUser })
})

app.post('/users', (req, res, next) => {
  console.log(req.body)
  const { email, password } = req.body

  if (email && password) {
    res.send('Data is correct')
  } else if (!password) {
    res.send('You need to fill the password field')
  } else {
    res.send('Email is required')
  }
})

//App port

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`))