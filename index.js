const express = require('express')
const todos = require('./routes/todos')
const app = express()
let port = process.argv[2] || 2223


app.use(express.urlencoded({extended: false}))

app.use('/api/v1/todos', todos)

app.listen(port)