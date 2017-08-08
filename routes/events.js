const
  express=require('express'),
  eventsRouter = new express.Router(),
  Event = require('../models/Event.js')

//index of events
  eventsRouter.get('/', (req, res) => {
    Event.find({}, (err, events) => {
      if(err) console.log(err)
      res.json(events)
    })
  })

//new event post
  eventsRouter.post('/', (req, res) => {
    const newEvent = new Event(req.body)
    newEvent.save((err, event) => {
      res.json(event)
    })
  })

//specific event show, update, & delete
  eventsRouter.route('/:id')
  .get((req, res) => {
    Event.findById(req.params.id, (err, event)=> {
      if(err) console.log(err)
      res.json(event)
    })
    })
    .patch((req, res) => {
      Event.findById(req.params.id, (err, event) => {
        Object.assign(event, req.body)
        event.save((err, updatedEvent) => {
          res.json({success:true, message: "Event Updated", event: updatedEvent})
        })
      })
    })
    .delete((req, res) => {
      Event.findByIdAndRemove(req.params.id, (err, deletedEvent) => {
        if(err) console.log(err)
        res.json({message: "Event deleted...", event: deletedEvent})
      })
    })


  module.exports = eventsRouter