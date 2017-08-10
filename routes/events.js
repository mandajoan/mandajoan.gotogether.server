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
  Event.create(req.body, (err, event) => {
    console.log(req.body);
      if(err) return res.json({success: false, message: "There was a problem creating the event!!!!.", err})
      res.json({success: true, message: "Event created.", event})
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
