const express = require('express')
// Create express instance
const app = express()

// Connect to mongodb
const mongoose = require('mongoose')
const uri = `mongodb+srv://${process.env.DB_NODE}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    // eslint-disable-next-line no-console
    if (err) { return console.log('Connection error =>' + err) }
    // eslint-disable-next-line no-console
    console.log('MongoDB is connected')
  }
)

// Require API routes
const userController = require('./controllers/UserController')

// Import API Routes
app.use(userController)

app.get('/', function (req, res, next) {
  res.status(200).json({ status: 'Open' })
})

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}

// Export express app
module.exports = app
