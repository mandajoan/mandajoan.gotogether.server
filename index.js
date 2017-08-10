const
  dotenv = require('dotenv').load({silent: true}),
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/gotogether',
  port = process.env.PORT || 3001,
  User = require('./models/User.js'),
  Event = require('./models/Event.js'),
  eventsRouter = require('./routes/events.js'),
  Interest = require('./models/Interest.js'),
  Category = require('./models/Category.js'),
  jwt = require('jsonwebtoken'),
  cors = require('cors')



//set up mongoose connection
  mongoose.connect(mongoUrl, (err) => {
    console.log(err || "Connected to MongoDB.")
  })

//middleware
  app.use(cors())
  app.use(logger('dev'))
  app.use(bodyParser.json())

//routes
  app.use('/events', eventsRouter)

//root route
  app.get('/', (req, res) => {
  res.json({message: "Root"})
})


//multiple paths using route (index & new user)

app.route('/users')
  .get((req, res) => {
    User.find({}, (err, users) => {
      res.json(users)
    })
  })
  .post((req, res) => {
    console.log(req.body)
    User.create(req.body, (err, user) => {
      res.json({success: true, message: "User created.", user})
    })
  })

//show & update user
app.route('/users/:id')
  .get((req, res) => {
    User.findById(req.params.id, (err, user) => {
      res.json(user)
    })
  })
  .patch((req, res) => {
    //triggers middleware to save & update user
    User.findById(req.params.id, (err, user) => {
      Object.assign(user, req.body)
      user.save((err, updatedUser) => {
        res.json({success: true, message: "User updated.", user: updatedUser})
      })
    })
  })

// the Log In route:
app.post('/authenticate', (req, res) => {
  User.findOne({email: req.body.email}, '+password', (err, user) => {
    if(!user || (user && !user.validPassword(req.body.password))) {
      return res.json({success: false, message: "Incorrect email or password."})
    }
    const userData = user.toObject()
    delete userData.password
    const token = jwt.sign(userData, process.env.SECRET)
    res.json({success: true, message: "Logged in successfully.", token})
  })
})


// all below require valid token
app.use(verifyToken)

app.get('/protected', (req, res) => {
  console.log("Current user:")
  console.log(req.user)
  res.json({message: "You are in the VIP."})
})


// //restrict access using middleware
function verifyToken(req, res, next) {
  const token = req.headers['token']
  if(token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if(err) return res.json({success: false, message: "Token could not be verified."})
      req.user = decoded
      next()
    })
  } else {
    res.json({success: false, message: "No token provided. Access denied."})
  }
}

app.listen(port, (err) => {
  console.log(err || `Server running on ${port}.` )})
