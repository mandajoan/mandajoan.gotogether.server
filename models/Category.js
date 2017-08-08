const
  mongoose = require('mongoose'),
  categorySchema = new mongoose.Schema({
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
    film: Boolean,
    digitalEntertainment: Boolean,
    socialMedia: Boolean,
    startups: Boolean,
    androidDev: Boolean,
    iosDev: Boolean,
    other: Boolean
  })

  var Category = mongoose.model('Category', categorySchema)
  module.exports = Category
