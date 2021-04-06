const express = require('express')
const routes = require('./routes')
const conectaMongoDB = require('./config/mongodb')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', routes)
conectaMongoDB()

app.listen(3000, () => console.log('App online...'))
