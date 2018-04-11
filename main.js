'use strict'

const { db } = require('./server/db/models')
const app = require('./server')
const PORT = 1337



db.sync() 
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`listening on port ${PORT}`))
  })
