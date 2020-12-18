require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/cors.config')(app)
require('./configs/middleware.config')(app)
require('./configs/passport.config')(app)

// Routes index
require('./routes')(app)

// Chat
const Message = require('./models/message')

const http = require('http').createServer(app)
const io = require('socket.io')(http, {
    cors: {
    origin: process.env.DOMAIN_LOCAL,
    methods: ["GET", "POST"],
    credentials: true
  }
})

io.on('connection', (socket) => {

  // Get the last 10 messages from the database.
  Message.find().sort({createdAt: -1}).limit(10).exec((err, messages) => {
    if (err) return console.error(err);

    // Send the last messages to the user.
    socket.emit('init', messages);
  });

  // Listen to connected users for a new message.
  socket.on('message', (msg) => {
    // Create a message with the content and the name of the user.
    const message = new Message({
      content: msg.content,
      name: msg.name,
    });

    // Save the message to the database.
    message.save((err) => {
      if (err) return console.error(err);
    });

    // Notify all other users about a new message.
    socket.broadcast.emit('push', msg);
  });
});

http.listen(4000, function () {
    console.log('listening on port 4000')
})

module.exports = app
