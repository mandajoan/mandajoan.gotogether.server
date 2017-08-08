const
  mongoose = require('mongoose'),
  eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    category: [{type:mongoose.Schema.Types.ObjectId, ref: 'Category'}],
    users: [{type:mongoose.Schema.Types.ObjectId, ref: 'User'}]
  })

var Event = mongoose.model('Event', eventSchema)
module.exports = Event
