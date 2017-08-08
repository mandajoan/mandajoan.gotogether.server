const
  mongoose = require('mongoose'),
  interestSchema = new mongoose.Schema({
    vr:  Boolean,
    ar: Boolean,
    ai:  Boolean,
    mr: Boolean,
    cs: Boolean,
    it: Boolean,
    programming: Boolean,
    dataScience: Boolean,
    machineLearning: Boolean,
    gameDev: Boolean,
    esports: Boolean,
    webDev: Boolean,
    security: Boolean,
    networkEngineering: Boolean,
    digitalMarketing: Boolean,
    threeSixtyVideo: Boolean,
    digitalEntertainment: Boolean,
    socialMedia: Boolean,
    startups: Boolean,
    androidDev: Boolean,
    iosDev: Boolean
  })

  var Interest = mongoose.model('Interest', interestSchema)
  module.exports = Interest
