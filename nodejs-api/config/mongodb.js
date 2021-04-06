const mongoose = require('mongoose')

function conectaMongoDB () {
  mongoose.connect(
    'mongodb://localhost:27017/blog_dev',
    { useUnifiedTopology: true, useNewUrlParser: true }
  )

  const db = mongoose.connection

  db.on('error', console.error.bind(console, 'Erro:'))

  db.once('open', () => console.info('MongoDB conectado!'))
}

module.exports = conectaMongoDB
