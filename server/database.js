const mongoose = require('mongoose')

const URI = 'mongodb://localhost/mern-app'

mongoose.connect(URI, { useNewUrlParser: true })
.then(db=> console.log('DB is Connected'))
.catch(err => console.log(err))

module.exports = mongoose